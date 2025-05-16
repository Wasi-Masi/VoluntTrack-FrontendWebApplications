/*
Description: Component that displays a calendar view with activities grouped by date, allowing month navigation.
Author: Tomio Nakamurakare
*/

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { Activity } from '../../dashboard/model/dashboard.entity';

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
export class CalendarComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
        this.groupActivitiesByDate();
      },
      error: (err) => {
        console.error('Error al cargar actividades:', err);
      }
    });

    this.generateCalendar(this.year, this.month);
  }

  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();

  weeks: Date[][] = [];

  readonly months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  yearOptions: number[] = [];

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

  eventsByDate: { [key: string]: Activity[] } = {};

  groupActivitiesByDate(): void {
    this.eventsByDate = {};
    for (let activity of this.activities) {
      const dateKey = activity.date; // debe ser formato "YYYY-MM-DD"
      if (!this.eventsByDate[dateKey]) {
        this.eventsByDate[dateKey] = [];
      }
      this.eventsByDate[dateKey].push(activity);
    }
  }

  getEvents(date: Date): Activity[] {
    const key = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
    return this.eventsByDate[key] || [];
  }

}
