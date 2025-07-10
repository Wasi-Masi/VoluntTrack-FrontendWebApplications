/*
Description:
This Angular standalone component provides a form to create a new activity,
handling input binding, form submission, and interaction with backend services
to save the activity and trigger notifications.

Author: Ainhoa Castillo
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import { Activity } from '../../dashboard/model/dashboard.entity';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateActivityService } from '../services/create-activity.service';
import { NotificationsService} from '../../notifications/services/notifications.service';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ]
})
export class CreateActivityComponent {
  activity: Activity = new Activity(
    0, // actividad_id
    '', // fecha
    '', // horaInicio
    '', // horaFin
    '', // titulo
    '', // descripcion
    '', // instrucciones
    '', // proposito
    0,  // <--- cupos: Ahora se inicializa a 0, se llenará con el input del usuario.
    '', // ubicacion
    'Activa', // estado (valor por defecto)
    1, // organizacion_id (valor por defecto)
    [], // imagenes
    0   // availableSlots: Se inicializará con el valor de cupos en onSubmit
  );

  picturesInput: string = '';

  constructor(
    private createService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) {
    // Solo inicializamos aquí las propiedades que son fijas o no dependen de un input del usuario.
    // this.activity.cupos = 50; // <--- ELIMINADO: Ya no es un valor fijo, viene del input
    this.activity.estado = 'Activa'; // Estado por defecto
    this.activity.organizacion_id = 1; // ID de organización por defecto
    // this.activity.availableSlots = this.activity.cupos; // <--- ELIMINADO: Se moverá a onSubmit para usar el valor real de cupos
  }

  onSubmit() {
    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    // Asegurarse de que `cupos` sea un número válido antes de asignarlo
    // Esto es importante porque el input de tipo "number" devuelve un string vacío si no hay valor
    this.activity.cupos = Number(this.activity.cupos) || 0; // Asegura que sea un número, o 0 si está vacío/inválido

    // Para una actividad nueva, los cupos disponibles son iguales a los cupos totales
    this.activity.availableSlots = this.activity.cupos; // <--- MOVIDO AQUÍ: Se asigna justo antes de enviar

    this.activity.instrucciones = this.activity.instrucciones || '';
    this.activity.proposito = this.activity.proposito || '';
    this.activity.imagenes = parsedPictures;

    this.createService.createActivity(this.activity).subscribe({
      next: (createdActivity) => {
        this.notificationsService.createTypedNotification('new-activity').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al crear actividad:', err);
        this.notificationsService.createTypedNotification('error', 'Error al crear la actividad.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
    });
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
