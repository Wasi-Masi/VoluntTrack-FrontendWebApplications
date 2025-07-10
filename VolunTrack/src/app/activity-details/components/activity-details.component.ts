// src/app/activity-details/activity-details.component.ts

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ActivityDetailsService } from '../services/activity-details.service'; // Asegúrate de que esta ruta sea correcta
import { Activity } from '../../dashboard/model/dashboard.entity'; // Asegúrate de que esta ruta sea correcta
import {NgForOf, NgIf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {TranslatePipe} from "@ngx-translate/core";

import { ApiResponse } from '../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!


@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    MatButton,
    MatIconButton,
    NgIf,
    RouterLink,
    MatTooltipModule,
    TranslatePipe
  ],
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  activity: Activity = new Activity(
    0,  // actividad_id: number
    '', // fecha: string
    '', // horaInicio: string
    '', // horaFin: string
    '', // titulo: string
    '', // descripcion: string
    '', // instrucciones: string
    '', // proposito: string
    0,  // cupos: number
    '', // ubicacion: string
    '', // estado: string
    0,  // organizacion_id: number
    [], // imagenes: string[]
    0   // availableSlots: number
  );
  selectedImage: string = '';
  currentIndex: number = 0;
  loadingActivity: boolean = true; // Añadir estado de carga
  errorMessage: string = '';       // Añadir para mensajes de error al usuario


  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      this.loadingActivity = true; // Iniciar carga
      this.errorMessage = '';      // Limpiar mensaje de error

      // MODIFICADO: Espera ApiResponse<Activity>
      this.activityService.getActivityById(id).subscribe({
        next: (apiResponse: ApiResponse<Activity>) => { // Recibe ApiResponse
          if (apiResponse.data) {
            this.activity = apiResponse.data; // Accede a los datos a través de .data
            this.selectedImage = apiResponse.data.imagenes?.[0] || '';
            console.log('Actividad cargada:', this.activity, 'Mensaje:', apiResponse.message);
          } else {
            console.warn('No se encontraron datos de la actividad:', apiResponse.message);
            this.errorMessage = apiResponse.message || 'No se pudo cargar la actividad o no se encontraron datos.';
          }
          this.loadingActivity = false; // Finalizar carga
        },
        error: (err: any) => { // 'err' ya es un objeto Error
          console.error('Error fetching activity:', err);
          this.loadingActivity = false; // Finalizar carga
          this.errorMessage = err.message || 'Ocurrió un error al cargar los detalles de la actividad.'; // Usar err.message
        }
      });
    } else {
      console.error('Invalid or missing activity ID in route parameters.');
      this.loadingActivity = false; // Finalizar carga
      this.errorMessage = 'ID de actividad inválido o faltante en los parámetros de la ruta.';
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
