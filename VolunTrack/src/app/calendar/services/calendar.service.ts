import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  private currentYear: number = new Date().getFullYear();
  private currentMonth: number = new Date().getMonth();

  get year(): number {
    return this.currentYear;
  }

  get month(): number {
    return this.currentMonth;
  }

  readonly months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  generateCalendar(year: number, month: number): Date[][] {
    this.currentYear = year;
    this.currentMonth = month;

    const firstDayOfMonth = new Date(year, month, 1);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));

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
    return weeks;
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth && date.getFullYear() === this.currentYear;
  }

  prevMonth(): Date[][] {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    return this.generateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth(): Date[][] {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    return this.generateCalendar(this.currentYear, this.currentMonth);
  }

  goToMonth(index: number): Date[][] {
    this.currentMonth = index;
    return this.generateCalendar(this.currentYear, this.currentMonth);
  }

  generateYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const range = 5;
    return Array.from({ length: 2 * range + 1 }, (_, i) => currentYear - range + i);
  }
}
