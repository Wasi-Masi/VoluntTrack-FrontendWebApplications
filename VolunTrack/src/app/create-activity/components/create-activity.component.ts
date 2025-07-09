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
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    '',
    'Activa',
    1,
    []
  );

  instructions: string = '';
  purpose: string = '';
  picturesInput: string = '';

  constructor(
    private createService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) {}

  onSubmit() {
    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    const activityToSend = {
      actividad_id: 0,
      fecha: this.activity.fecha,
      horaInicio: this.activity.horaInicio,
      horaFin: this.activity.horaFin,
      titulo: this.activity.titulo,
      descripcion: this.activity.descripcion,
      instrucciones: this.instructions,
      proposito: this.purpose,
      cupos: 50,
      ubicacion: this.activity.ubicacion,
      estado: 'Activa',
      organizacion_id: 1,
      imagenes: parsedPictures,
    } as Activity;

    this.createService.createActivity(activityToSend).subscribe({
      next: (createdActivity) => {
        this.notificationsService.createTypedNotification('new-activity').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al crear actividad:', err);
      }
    });
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
