import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    RouterLink,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnChanges {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();

  weeks: Date[][] = [];

  readonly months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  yearOptions: number[] = [];

  ngOnInit() {
    this.generateCalendar(this.year, this.month);
    this.generateYearOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['year'] || changes['month']) {
      this.generateCalendar(this.year, this.month);
    }
  }

  generateCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7)); // Lunes como primer día

    const weeks: Date[][] = [];
    let currentDate = new Date(startDate);

    for (let week = 0; week < 6; week++) {
      const weekDays: Date[] = [];
      for (let day = 0; day < 7; day++) {
        weekDays.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(weekDays);
    }

    this.weeks = weeks;
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.month;
  }

  goToMonth(index: number) {
    this.month = index;
    this.generateCalendar(this.year, this.month);
  }

  generateYearOptions() {
    const range = 10;
    this.yearOptions = Array.from({ length: 2 * range + 1 }, (_, i) => this.year - range + i);
  }
}
