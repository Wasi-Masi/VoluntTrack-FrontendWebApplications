import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Activity } from '../model/dashboard.entity';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

// ¡IMPORTAR LA INTERFAZ ApiResponse!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Ajusta la ruta si es diferente

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
  errorMessage: string = ''; // Para mostrar mensajes de error al usuario

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // MODIFICADO: Ahora 'apiResponse' es de tipo ApiResponse<Activity[]>
    this.dashboardService.getActivities().subscribe({
      next: (apiResponse: ApiResponse<Activity[]>) => { // Especificamos el tipo de la respuesta
        if (apiResponse.data) { // Verificamos si la propiedad 'data' contiene los datos
          this.activities = apiResponse.data; // Asignamos los datos reales de la actividad
          this.errorMessage = ''; // Limpiar cualquier mensaje de error anterior
        } else {
          // Esto se ejecuta si la API devuelve un ApiResponse exitoso pero con 'data: null'
          // o si el array de actividades está vacío y el backend envía un mensaje específico.
          console.warn('No hay actividades en la respuesta:', apiResponse.message);
          this.activities = []; // Asegurarse de que la lista de actividades esté vacía
          this.errorMessage = apiResponse.message || 'No se encontraron actividades.'; // Mostrar mensaje al usuario
        }
      },
      error: (err) => { // 'err' será un Error de JavaScript si se propaga desde handleHttpError
        console.error('Error al cargar actividades:', err.message || err); // Acceder a err.message si está disponible
        this.activities = []; // Asegurarse de que la lista de actividades esté vacía
        this.errorMessage = err.message || 'Ocurrió un error al cargar las actividades.'; // Mostrar mensaje de error al usuario
      }
    });
  }
}
