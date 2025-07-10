import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Activity } from '../model/dashboard.entity';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

import { ApiResponse } from '../../shared/models/api-response.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    MatIconModule,
    RouterLink,
    TranslatePipe
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities: Activity[] = [];
  errorMessage: string = '';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe({
      next: (apiResponse: ApiResponse<Activity[]>) => {
        if (apiResponse.data) {
          this.activities = apiResponse.data;
          this.errorMessage = '';
        } else {
          console.warn('No hay actividades en la respuesta:', apiResponse.message);
          this.activities = []; // Asegurarse de que la lista de actividades esté vacía
          this.errorMessage = apiResponse.message || 'No se encontraron actividades.'; // Mostrar mensaje al usuario
        }
      },
      error: (err) => {
        console.error('Error al cargar actividades:', err.message || err); // Acceder a err.message si está disponible
        this.activities = []; // Asegurarse de que la lista de actividades esté vacía
        this.errorMessage = err.message || 'Ocurrió un error al cargar las actividades.'; // Mostrar mensaje de error al usuario
      }
    });
  }
}
