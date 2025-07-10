// src/app/volunteers/activity-list-dialog/activity-list-dialog.component.ts

import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';

import {ActivityDetailsService} from '../../../activity-details/services/activity-details.service';
import {Activity} from '../../../dashboard/model/dashboard.entity';
import {InscriptionService} from '../../../participation/services/inscription.service';
import {CreateInscriptionResource} from '../../../participation/resources/create-inscription.resource';

import {NotificationsService} from '../../../notifications/services/notifications.service';
import { LoginService } from '../../../login/services/login.service';
import { ApiResponse } from '../../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!
import { NotificationType } from '../../../notifications/model/notification-type.enum'; // ¡IMPORTAR NotificationType enum!


@Component({
  selector: 'app-activity-list-dialog',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    TranslateModule,
    TranslatePipe,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './activity-list-dialog.component.html',
  styleUrls: ['./activity-list-dialog.component.css']
})
export class ActivityListDialogComponent implements OnInit {

  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  loadingActivities: boolean = true;
  loadingEnrollment: boolean = false;
  displayedColumns: string[] = ['name', 'description', 'availableSlots', 'action'];

  constructor(
    public dialogRef: MatDialogRef<ActivityListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { volunteerId: number, volunteerName: string },
    private activityDetailsService: ActivityDetailsService,
    private inscriptionService: InscriptionService,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.loadingActivities = true;
    // MODIFICADO: Espera ApiResponse<Activity[]>
    this.activityDetailsService.getAllActivities().subscribe({
      next: (apiResponse: ApiResponse<Activity[]>) => { // Recibe ApiResponse
        if (apiResponse.data) {
          // Asegúrate de que el constructor de Activity en dashboard.entity.ts
          // coincida con estos parámetros. Si lo cambiaste a un objeto, actualiza esto también.
          this.activities = apiResponse.data.map(activityData => new Activity( // Accede a los datos a través de .data
            activityData.actividad_id,
            activityData.fecha,
            activityData.horaInicio,
            activityData.horaFin,
            activityData.titulo,
            activityData.descripcion,
            activityData.instrucciones,
            activityData.proposito,
            activityData.cupos,
            activityData.ubicacion,
            activityData.estado,
            activityData.organizacion_id,
            activityData.imagenes,
            activityData.availableSlots
          ));
          console.log('Actividades cargadas (instancias de Activity):', this.activities, 'Mensaje:', apiResponse.message);
        } else {
          console.warn('No se encontraron datos de actividades:', apiResponse.message);
          this.activities = []; // Asegurarse de que la lista esté vacía si no hay datos
        }
        this.loadingActivities = false;
      },
      error: (err: any) => {
        console.error('Error al cargar actividades:', err);
        this.loadingActivities = false;
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
            NotificationType.GENERIC, // Usar el enum NotificationType
            recipientId,
            recipientType,
            err.message || 'Error al cargar las actividades.' // Usa err.message
          ).subscribe({
            next: (response) => console.log('Notificación de error enviada:', response.message),
            error: (notificationErr) => console.error('Error al enviar notificación:', notificationErr)
          });
        }
      }
    });
  }

  selectActivity(activity: Activity): void {
    this.selectedActivity = activity;
    console.log('Actividad seleccionada:', activity);
  }

  enrollVolunteer(activity: Activity): void {
    console.log('Datos de la actividad al presionar ENROLL:', activity);
    console.log('Estado de la actividad:', activity.estado);
    console.log('¿Está la inscripción abierta (isInscriptionOpen)?', activity.isInscriptionOpen);
    console.log('Cupos disponibles (availableSlots):', activity.availableSlots);

    const recipientId = this.loginService.getOrganizationId();
    const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

    if (!this.data.volunteerId) {
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
          NotificationType.GENERIC, // Usar el enum NotificationType
          recipientId,
          recipientType,
          'Error: ID de voluntario no proporcionado.'
        ).subscribe({
          next: (response) => console.log('Notificación enviada:', response.message),
          error: (err) => console.error('Error al enviar notificación:', err)
        });
      }
      return;
    }

    if (!activity.isInscriptionOpen) {
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
          NotificationType.GENERIC, // Usar el enum NotificationType
          recipientId,
          recipientType,
          'La inscripción para esta actividad no está abierta.'
        ).subscribe({
          next: (response) => console.log('Notificación enviada:', response.message),
          error: (err) => console.error('Error al enviar notificación:', err)
        });
      }
      return;
    }

    if (activity.availableSlots <= 0) {
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
          NotificationType.GENERIC, // Usar el enum NotificationType
          recipientId,
          recipientType,
          'Esta actividad no tiene cupos disponibles.'
        ).subscribe({
          next: (response) => console.log('Notificación enviada:', response.message),
          error: (err) => console.error('Error al enviar notificación:', err)
        });
      }
      return;
    }

    this.loadingEnrollment = true;

    const inscriptionResource: CreateInscriptionResource = {
      voluntarioId: this.data.volunteerId,
      actividadId: activity.actividad_id,
      estado: "APPROVED", // O el estado inicial que desees
      fecha: new Date().toISOString().split('T')[0], // formato YYYY-MM-DD
    };

    this.inscriptionService.createInscription(inscriptionResource).subscribe({
      next: (apiResponse: ApiResponse<any>) => { // Recibe ApiResponse
        console.log('Voluntario inscrito exitosamente:', apiResponse.message, apiResponse.data);
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification2( // Usar createTypedNotification2
            NotificationType.VOLUNTEER_JOINED, // Usar el enum NotificationType
            recipientId,
            recipientType,
            apiResponse.message || `Voluntario inscrito en "${activity.titulo}" exitosamente.` // Usa el mensaje del backend
          ).subscribe({
            next: (response) => console.log('Notificación de éxito enviada:', response.message),
            error: (err) => console.error('Error al enviar notificación:', err)
          });
        }
        this.loadingEnrollment = false;
        this.dialogRef.close({ enrolled: true, activity: activity, message: apiResponse.message });
      },
      error: (err: any) => {
        console.error('Error al inscribir voluntario:', err);
        this.loadingEnrollment = false;
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification2(
            NotificationType.GENERIC,
            recipientId,
            recipientType,
            err.message || 'Error al inscribir al voluntario en la actividad.'
          ).subscribe({
            next: (response) => console.log('Notificación de error enviada:', response.message),
            error: (notificationErr) => console.error('Error al enviar notificación:', notificationErr)
          });
        }
        this.dialogRef.close({ error: err.message || 'Error al inscribir al voluntario.' });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
