import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isHoliday, getHolidays } from 'feiertagejs';
import { DayModalComponent } from './day-modal/day-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  year = 2024;
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
    private translate: TranslateService
  ) {}

  getDaysOfMonth(month: string): number[] {
    const monthIndex = this.months.indexOf(month);
    const daysOfMonth = new Date(this.year, monthIndex + 1, 0).getDate();
    return Array.from({ length: daysOfMonth }, (_, i) => i + 1);
  }

  getBackgroundColor(monthIndex: number, day: number) {
    const date = new Date(this.year, monthIndex, day);
    let weekday = date.getDay();
    let backgroundColor: string = '';
    let bg: string;
    let color: string;
    if (weekday === 6 || weekday === 0) {
      backgroundColor += ' self-bg-sky-600 text-white';
    } else {
      bg = '';
      backgroundColor += ' self-bg-sky-200';
    }
    if (this.isDateToday(date)) {
      backgroundColor +=
        ' border-4 self-border-b-cyan-300 self-border-r-cyan-300 self-border-t-cyan-900 self-border-l-cyan-900';
    }
    if (isHoliday(date, 'BUND')) {
      backgroundColor += ' border-b-4 self-border-b-blue-600';
    }
    return backgroundColor;
  }

  isDateToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  getday(day: number) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(day)) {
      return '0' + day.toString();
    } else {
      return day.toString();
    }
  }

  getNumberOfHolidaysAtWeekend(): string {
    const holidays = getHolidays(this.year, 'BUND');
    let numberOfHolidaysAtWeekend = 0;
    holidays.forEach((holiday) => {
      let weekday = holiday.date.getDay();
      if (weekday === 6 || weekday === 0) {
        numberOfHolidaysAtWeekend++;
      }
    });
    return numberOfHolidaysAtWeekend + ' / ' + holidays.length;
  }

  getNumberOfHolidaysAtWeekendPercentage() {
    const holidays = getHolidays(this.year, 'BUND');
    let numberOfHolidaysAtWeekend = 0;
    holidays.forEach((holiday) => {
      let weekday = holiday.date.getDay();
      if (weekday === 6 || weekday === 0) {
        numberOfHolidaysAtWeekend++;
      }
    });
    const result = Math.round(
      (numberOfHolidaysAtWeekend * 100) / holidays.length
    );
    console.log(result);

    return result.toString() + '%';
  }

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
}
