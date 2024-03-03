import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports:[TranslateModule,CommonModule]
})
export class AboutComponent {
  cvActivated: boolean = false;

  constructor(public translateService: TranslateService) {}

  toggleCv(event: Event | null) {
    if (event) {
      event.preventDefault();
    }

    this.cvActivated = !this.cvActivated;
  }
}
