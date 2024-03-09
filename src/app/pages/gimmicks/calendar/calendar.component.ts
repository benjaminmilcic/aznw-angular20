import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isHoliday, getHolidays } from 'feiertagejs';
import { DayModalComponent } from './day-modal/day-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular/standalone';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { QuizBottomSheetComponent } from './quiz-bottom-sheet/quiz-bottom-sheet.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatBottomSheetModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];

  constructor(
    private modalCtrl: ModalController,
    private translate: TranslateService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(QuizBottomSheetComponent, {
      disableClose: true,
      data: { year: this.currentYear },
    });
  }

  // getBackgroundColor(monthIndex: number, day: number) {
  //   const date = new Date(this.year, monthIndex, day);
  //   let weekday = date.getDay();
  //   let backgroundColor: string = '';
  //   let bg: string;
  //   let color: string;
  //   if (weekday === 6 || weekday === 0) {
  //     backgroundColor += ' self-bg-sky-600 text-white';
  //   } else {
  //     bg = '';
  //     backgroundColor += ' self-bg-sky-200';
  //   }
  //   if (this.isDateToday(date)) {
  //     backgroundColor +=
  //       ' border-4 self-border-b-cyan-300 self-border-r-cyan-300 self-border-t-cyan-900 self-border-l-cyan-900';
  //   }
  //   if (isHoliday(date, 'BUND')) {
  //     backgroundColor += ' border-b-4 self-border-b-blue-600';
  //   }
  //   return backgroundColor;
  // }

  isDateToday(year: number, month: number, day: number): boolean {
    const date = new Date(year, month, day);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  // getday(day: number) {
  //   if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(day)) {
  //     return '0' + day.toString();
  //   } else {
  //     return day.toString();
  //   }
  // }

  // getNumberOfHolidaysAtWeekend(): string {
  //   const holidays = getHolidays(this.year, 'BUND');
  //   let numberOfHolidaysAtWeekend = 0;
  //   holidays.forEach((holiday) => {
  //     let weekday = holiday.date.getDay();
  //     if (weekday === 6 || weekday === 0) {
  //       numberOfHolidaysAtWeekend++;
  //     }
  //   });
  //   return numberOfHolidaysAtWeekend + ' / ' + holidays.length;
  // }

  // getNumberOfHolidaysAtWeekendPercentage() {
  //   const holidays = getHolidays(this.year, 'BUND');
  //   let numberOfHolidaysAtWeekend = 0;
  //   holidays.forEach((holiday) => {
  //     let weekday = holiday.date.getDay();
  //     if (weekday === 6 || weekday === 0) {
  //       numberOfHolidaysAtWeekend++;
  //     }
  //   });
  //   const result = Math.round(
  //     (numberOfHolidaysAtWeekend * 100) / holidays.length
  //   );
  //   console.log(result);

  //   return result.toString() + '%';
  // }

  async openDayModal(day: number, month: string, year: number) {
    const modal = await this.modalCtrl.create({
      component: DayModalComponent,
      backdropDismiss: false,
      componentProps: {
        day,
        month,
        year,
      },
    });
    modal.onDidDismiss().then(async (data) => {
      if (data.role === 'save') {
      }
    });
    await modal.present();
  }

  getEmptyDiv(): number[] {
    let date = new Date(this.currentYear, this.currentMonth);
    if (date.getDay() === 0) {
      return [...Array(6).keys()];
    } else {
      return [...Array(date.getDay() - 1).keys()];
    }
  }

  getSvgOfMonth(): string {
    switch (this.currentMonth) {
      case 0:
        return '/assets/svg/january.svg';
      case 1:
        return '/assets/svg/february.svg';
      case 2:
        return '/assets/svg/march.svg';
      case 3:
        return '/assets/svg/april.svg';
      case 4:
        return '/assets/svg/may.svg';
      case 5:
        return '/assets/svg/june.svg';
      case 6:
        return '/assets/svg/july.svg';
      case 7:
        return '/assets/svg/august.svg';
      case 8:
        return '/assets/svg/september.svg';
      case 9:
        return '/assets/svg/october.svg';
      case 10:
        return '/assets/svg/november.svg';
      case 11:
        return '/assets/svg/december.svg';
      default:
        return '';
    }
  }

  incrementCurrentMonth() {
    this.currentMonth += 1;
    if (this.currentMonth === 12) {
      this.currentMonth = 0;
      this.currentYear++;
    }
  }

  decrementCurrentMonth() {
    this.currentMonth -= 1;
    if (this.currentMonth === -1) {
      this.currentMonth = 11;
      this.currentYear--;
    }
  }

  dateIsHoliday(year: number, month: number, day: number): boolean {
    const date = new Date(year, month, day);
    if (isHoliday(date, 'BUND')) {
      return true;
    } else {
      return false;
    }
  }

  getDaysOfMonth(monthIndex: number): number {
    const daysOfMonth = new Date(this.currentYear, monthIndex + 1, 0).getDate();
    return daysOfMonth;
  }

  getDaysOfMonthArray(monthIndex: number): number[] {
    return Array.from(
      { length: this.getDaysOfMonth(monthIndex) },
      (_, i) => i + 1
    );
  }

  getWorkingDaysOfMonth(): number {
    let daysOfMonth = this.getDaysOfMonth(this.currentMonth);
    let result = this.getDaysOfMonth(this.currentMonth);
    for (let index = 1; index <= daysOfMonth; index++) {
      let day = new Date(this.currentYear, this.currentMonth, index);
      if (isHoliday(day, 'BUND') || day.getDay() === 6 || day.getDay() === 0) {
        result--;
      }
    }
    return result;
  }

  getWorkingDaysOfMonthPercentage(): string {
    const result = Math.round(
      (this.getWorkingDaysOfMonth() * 100) /
        this.getDaysOfMonth(this.currentMonth)
    );

    return result.toString() + '%';
  }
}
