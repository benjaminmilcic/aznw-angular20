import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  ModalController,
  IonContent,
  IonToolbar,
  IonTitle,
  IonCard,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-day-modal',
  standalone: true,
  imports: [
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonButtons,
    EditorModule,
  ],
  templateUrl: './day-modal.component.html',
  styleUrl: './day-modal.component.css',
})
export class DayModalComponent implements OnInit {
  @Input() day: number;
  @Input() month: string;
  @Input() year: number;
  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService
  ) {}

  async ngOnInit() {}

  async close() {
    await this.modalCtrl.dismiss(null, 'cancel');
  }

  async save() {
    await this.modalCtrl.dismiss(null, 'save');
  }
}
