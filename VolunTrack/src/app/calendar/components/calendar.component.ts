import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  activities: Activity[] = [];
  eventsByDate: { [key: string]: Activity[] } = {};

  weeks: Date[][] = [];

  monthTranslationKeys = [
    'MONTHS.JANUARY', 'MONTHS.FEBRUARY', 'MONTHS.MARCH', 'MONTHS.APRIL', 'MONTHS.MAY', 'MONTHS.JUNE',
    'MONTHS.JULY', 'MONTHS.AUGUST', 'MONTHS.SEPTEMBER', 'MONTHS.OCTOBER', 'MONTHS.NOVEMBER', 'MONTHS.DECEMBER'
  ];

  get yearOptions(): number[] { return this.calendarService.generateYearOptions(); }
  get year(): number { return this.calendarService.year; }
  get month(): number { return this.calendarService.month; }


  constructor(
    private dashboardService: DashboardService,
    private calendarService: CalendarService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
        this.groupActivitiesByDate();
        this.weeks = this.calendarService.generateCalendar(this.year, this.month);
      },
      error: (err) => {
        console.error('Error al cargar actividades:', err);
      }
    });
  }

  isCurrentMonth(date: Date): boolean {
    return this.calendarService.isCurrentMonth(date);
  }

  hasEvents(date: Date): boolean {
    return this.getEvents(date).length > 0;
  }

  goToMonth(index: number): void {
    this.weeks = this.calendarService.goToMonth(index);
  }

  prevYear(): void {
    this.weeks = this.calendarService.prevYear();
  }

  nextYear(): void {
    this.weeks = this.calendarService.nextYear();
  }

  groupActivitiesByDate(): void {
    this.eventsByDate = {};
    for (let activity of this.activities) {
      const dateKey = activity.fecha;
      if (!this.eventsByDate[dateKey]) {
        this.eventsByDate[dateKey] = [];
      }
      this.eventsByDate[dateKey].push(activity);
    }
  }

  getEvents(date: Date): Activity[] {
    const key = date.toISOString().split('T')[0];
    return this.eventsByDate[key] || [];
  }

}
