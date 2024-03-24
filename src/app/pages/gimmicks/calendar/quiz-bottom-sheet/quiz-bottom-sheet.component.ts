import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';
import { Holiday, getHolidays } from 'feiertagejs';
import * as de from '@angular/common/locales/de';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quiz-bottom-sheet',
  standalone: true,
  imports: [
    MatBottomSheetModule,
    CommonModule,
    ScratchCardComponent,
    TranslateModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }],
  templateUrl: './quiz-bottom-sheet.component.html',
  styleUrl: './quiz-bottom-sheet.component.css',
})
export class QuizBottomSheetComponent implements OnInit {
  holiday: Holiday;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<QuizBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { year: number }
  ) {
    registerLocaleData(de.default);
  }

  ngOnInit() {
    let allHolidays = getHolidays(this.data.year, 'BUND');
    const randomNumber = Math.floor(Math.random() * allHolidays.length);
    this.holiday = allHolidays[randomNumber];
  }

  closeBottomSheet() {
    this._bottomSheetRef.dismiss();
  }

  getScratchWord(): string {
    switch (this.holiday.name) {
      case 'NEUJAHRSTAG':
        return 'NEUJAHR';
      case 'KARFREITAG':
        return 'KARFREITAG';
      case 'OSTERMONTAG':
        return 'OSTERMONTAG';
      case 'TAG_DER_ARBEIT':
        return 'TAG DER ARBEIT';
      case 'CHRISTIHIMMELFAHRT':
        return 'CHRISTIHIMMELFAHRT';
      case 'PFINGSTMONTAG':
        return 'PFINGSTMONTAG';
      case 'DEUTSCHEEINHEIT':
        return 'TAG DER DEUTSCHEN EINHEIT';
      case 'ERSTERWEIHNACHTSFEIERTAG':
        return 'ERSTER WEIHNACHTSFEIERTAG';
      case 'ZWEITERWEIHNACHTSFEIERTAG':
        return 'ZWEITER WEIHNACHTSFEIERTAG';

      default:
        return '';
    }
  }
}
