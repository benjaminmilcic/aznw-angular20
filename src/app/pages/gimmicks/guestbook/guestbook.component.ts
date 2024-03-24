import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  LOCALE_ID,
  OnInit,
  ViewChild,
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { finalize, last, lastValueFrom } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';
import { Post } from './guestbook.model';
import { registerLocaleData } from '@angular/common';
import * as de from '@angular/common/locales/de';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-guestbook',
  standalone: true,
  imports: [
    IonIcon,
    IonFabList,
    IonFabButton,
    YouTubePlayer,
    CommonModule,
    EditorModule,
    IonFab,
    IonFabButton,
    IonIcon,
    MatTooltipModule,
    IonInput,
    FormsModule,
    TranslateModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }],
  templateUrl: './guestbook.component.html',
  styleUrl: './guestbook.component.css',
})
export class GuestbookComponent implements OnInit, AfterViewInit {
  showcreatePostDialog = false;
  postName: string;
  postContent: string;
  posts: Post[] = [];

  config: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    toolbar:
      'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
    file_picker_types: 'image',
    // image_advtab: false,
    image_description: false,
    // image_dimensions: false,
    block_unsupported_drop: true,
    images_reuse_filename: true,
    paste_data_images: false,
    images_upload_handler: (blobInfo) => {
      const file = blobInfo.blob();
      const filePath = `${Date.now()}-${blobInfo.filename()}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      const promise = new Promise<string>((resolve, reject) => {
        task
          .snapshotChanges()
          .pipe(
            finalize(() =>
              ref
                .getDownloadURL()
                .pipe(last())
                .subscribe((url) => {
                  resolve(url);
                })
            )
          )
          .subscribe((_) => {
            // do nothing
          });
      });
      return promise;
    },
  };

  @ViewChild('youTubePlayer') youTubePlayer: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  constructor(
    public sanitizer: DomSanitizer,
    private storage: AngularFireStorage,
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    registerLocaleData(de.default);
  }

  async ngOnInit() {
    this.loadFromDatabase();
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(
      this.youTubePlayer.nativeElement.clientWidth,
      384
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }

  async onSavePost() {
    await this.saveToDatabase();
    await this.loadFromDatabase();
    this.showcreatePostDialog = false;
  }

  onCreatePost() {
    this.postName = '';
    this.postContent = '';
    this.showcreatePostDialog = true;
  }

  private async saveToDatabase() {
    await lastValueFrom(
      this.http.post<Post>(
        'https://auf-zu-neuen-welten.de/api/posts/post/',
        JSON.stringify({
          name: this.postName,
          content: this.postContent,
          date: new Date(),
        })
      )
    );
  }

  private async loadFromDatabase() {
    this.posts = await lastValueFrom(
      this.http.get<Post[]>('https://auf-zu-neuen-welten.de/api/posts/get/')
    );
  }
}
