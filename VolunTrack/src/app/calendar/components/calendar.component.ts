import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import { DashboardService } from '../../dashboard/services/dashboard.service';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CalendarService } from '../services/calendar.service';
import { ApiResponse } from '../../shared/models/api-response.interface'; // Importa ApiResponse

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
    // MODIFICADO: Ahora 'response' es de tipo ApiResponse<Activity[]>
    this.dashboardService.getActivities().subscribe({
      next: (apiResponse: ApiResponse<Activity[]>) => { // Especificamos el tipo de la respuesta
        if (apiResponse.data) { // Verificamos si la propiedad 'data' contiene los datos
          this.activities = apiResponse.data; // Asignamos los datos reales de la actividad
          this.groupActivitiesByDate();
          this.weeks = this.calendarService.generateCalendar(this.year, this.month);
        } else {
          // Esto se ejecuta si la API devuelve un ApiResponse exitoso pero con 'data: null'
          // Podrías manejarlo como un caso de "no hay actividades"
          console.warn('No hay datos de actividades en la respuesta:', apiResponse.message);
          this.activities = []; // Asegurarse de que la lista de actividades esté vacía
          this.eventsByDate = {}; // Y los eventos también
        }
      },
      error: (err) => { // 'err' será un Error de JavaScript si se propaga desde handleHttpError
        console.error('Error al cargar actividades:', err.message || err); // Acceder a err.message si está disponible
        this.activities = []; // Asegurarse de que la lista de actividades esté vacía
        this.eventsByDate = {}; // Y los eventos también
        // Aquí podrías mostrar un mensaje de error al usuario
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
      // Asegúrate de que activity.fecha es el formato esperado (ej. "YYYY-MM-DD")
      // Si activity.fecha es un objeto Date, quizás necesites convertirlo a string
      const dateKey = activity.fecha; // Asumiendo que activity.fecha ya es 'YYYY-MM-DD' string
      if (!this.eventsByDate[dateKey]) {
        this.eventsByDate[dateKey] = [];
      }
      this.eventsByDate[dateKey].push(activity);
    }
  }

  getEvents(date: Date): Activity[] {
    const key = date.toISOString().split('T')[0]; // Asegura que el formato de clave sea 'YYYY-MM-DD'
    return this.eventsByDate[key] || [];
  }

}
