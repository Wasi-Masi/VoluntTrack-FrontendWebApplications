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
import { LoginService } from '../../../login/services/login.service'; // ¡NUEVO! Importar LoginService


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
    private loginService: LoginService // ¡NUEVO! Inyectar LoginService
  ) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.loadingActivities = true;
    this.activityDetailsService.getAllActivities().subscribe({
      next: (data: Activity[]) => {
        // Asegúrate de que el constructor de Activity en dashboard.entity.ts
        // coincida con estos parámetros. Si lo cambiaste a un objeto, actualiza esto también.
        this.activities = data.map(activityData => new Activity(
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

        this.loadingActivities = false;
        console.log('Actividades cargadas (instancias de Activity):', this.activities);
      },
      error: (error) => {
        console.error('Error al cargar actividades:', error);
        this.loadingActivities = false;
        // LLAMADA 1: Notificación de error al cargar actividades
        const recipientId = this.loginService.getOrganizationId();
        const recipientType: 'VOLUNTEER' | 'ORGANIZATION' = 'ORGANIZATION';

        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores de carga
            recipientId,
            recipientType,
            'Error al cargar las actividades.'
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
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
      // LLAMADA 2: Notificación de error si ID de voluntario no proporcionado
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Tipo genérico para errores de validación
          recipientId,
          recipientType,
          'Error: ID de voluntario no proporcionado.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    if (!activity.isInscriptionOpen) {
      // LLAMADA 3: Notificación informativa si la inscripción no está abierta
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Tipo genérico para info/advertencia
          recipientId,
          recipientType,
          'La inscripción para esta actividad no está abierta.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    if (activity.availableSlots <= 0) {
      // LLAMADA 4: Notificación informativa si no hay cupos disponibles
      if (recipientId !== null) {
        this.notificationsService.createTypedNotification(
          'GENERIC', // Tipo genérico para info/advertencia
          recipientId,
          recipientType,
          'Esta actividad no tiene cupos disponibles.'
        ).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
      }
      return;
    }

    this.loadingEnrollment = true;

    const inscriptionResource = {
      voluntarioId: this.data.volunteerId,
      actividadId: activity.actividad_id,
      estado: "APPROVED",
      fecha: new Date().toISOString().split('T')[0], // formato YYYY-MM-DD
    };

    this.inscriptionService.createInscription(inscriptionResource).subscribe({
      next: (response) => {
        console.log('Voluntario inscrito exitosamente:', response);
        // LLAMADA 5: Notificación de éxito al inscribir voluntario
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'VOLUNTEER_JOINED', // Usar 'VOLUNTEER_JOINED' si el backend usa este tipo para un nuevo voluntario en actividad
            recipientId,
            recipientType,
            `Voluntario inscrito en "${activity.titulo}" exitosamente.`
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
        this.dialogRef.close({ enrolled: true, activity: activity });
      },
      error: (error) => {
        console.error('Error al inscribir voluntario:', error);
        this.loadingEnrollment = false;
        let errorMessage = 'Error al inscribir al voluntario en la actividad.';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        // LLAMADA 6: Notificación de error al inscribir voluntario
        if (recipientId !== null) {
          this.notificationsService.createTypedNotification(
            'GENERIC', // Tipo genérico para errores
            recipientId,
            recipientType,
            errorMessage
          ).subscribe(() => {
            window.dispatchEvent(new Event('openNotifications'));
          });
        }
        this.dialogRef.close({ error: errorMessage });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
