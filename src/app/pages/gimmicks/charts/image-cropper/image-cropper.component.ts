import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-image-cropper',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonFab,
    IonFabButton,
  ],
  templateUrl: './image-cropper.component.html',
  styleUrl: './image-cropper.component.css',
})
export class ImageCropperComponent {
  imageSrc: string;

  constructor(private modalCtrl: ModalController) {}
  async onFileSelected(event) {
    const file: File = event.target.files[0];
    this.imageSrc = URL.createObjectURL(file);
  }

  async close() {
    await this.modalCtrl.dismiss(null, 'cancel');
  }

  async save() {
    await this.modalCtrl.dismiss(null, 'save');
  }
}
