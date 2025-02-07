import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

interface DialogData {
  success: boolean;
}

@Component({
  selector: 'app-http-error',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './http-error.component.html',
  styleUrl: './http-error.component.css',
})
export class HttpErrorComponent {
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  email = 'benjamin.milcic@gmail.com';
}
