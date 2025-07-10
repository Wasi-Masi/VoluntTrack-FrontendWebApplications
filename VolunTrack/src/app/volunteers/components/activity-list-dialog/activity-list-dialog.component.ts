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
import {Activity} from '../../../dashboard/model/dashboard.entity'; // Tu entidad Activity existente
import {InscriptionService} from '../../../participation/services/inscription.service';
import {CreateInscriptionResource} from '../../../participation/resources/create-inscription.resource';

import {NotificationsService} from '../../../notifications/services/notifications.service';


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

  // Cambia el tipo de activities para usar la clase Activity directamente
  // y luego le asignaremos la propiedad 'availableSlots' si es necesario.
  activities: Activity[] = [];
  selectedActivity: Activity | null = null; // También aquí
  loadingActivities: boolean = true;
  loadingEnrollment: boolean = false;
  displayedColumns: string[] = ['name', 'description', 'availableSlots', 'action'];

  constructor(
    public dialogRef: MatDialogRef<ActivityListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { volunteerId: number, volunteerName: string },
    private activityDetailsService: ActivityDetailsService,
    private inscriptionService: InscriptionService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.loadingActivities = true;
    this.activityDetailsService.getAllActivities().subscribe({
      next: (data: Activity[]) => {
        // ¡CAMBIO CLAVE AQUÍ! Mapea los objetos planos a instancias de la clase Activity
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
          activityData.availableSlots // Asegúrate de que este campo exista en el JSON del backend
        ));

        this.loadingActivities = false;
        console.log('Actividades cargadas (instancias de Activity):', this.activities); // Puedes verificar en consola
      },
      error: (error) => {
        console.error('Error al cargar actividades:', error);
        this.loadingActivities = false;
        this.notificationsService.createTypedNotification('error', 'Error al cargar las actividades.').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
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


    if (!this.data.volunteerId) {
      this.notificationsService.createTypedNotification('error', 'Error: ID de voluntario no proporcionado.').subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }

    // Esta validación ahora usará el 'estado' real del backend gracias a tu cambio en Activity.ts
    if (!activity.isInscriptionOpen) {
      this.notificationsService.createTypedNotification('info', 'La inscripción para esta actividad no está abierta.').subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }

    // Asegúrate de que 'availableSlots' sea una propiedad en el objeto de actividad
    // que estás usando. Si `activity.availableSlots` no existe o es incorrecto,
    // el chequeo fallará.
    // Necesitas verificar que `Object.assign` en `loadActivities` realmente agregue esto.
    if (activity.availableSlots <= 0) { //
      this.notificationsService.createTypedNotification('info', 'Esta actividad no tiene cupos disponibles.').subscribe(() => {
        window.dispatchEvent(new Event('openNotifications'));
      });
      return;
    }


    this.loadingEnrollment = true;

    const inscriptionResource = {
      voluntarioId: this.data.volunteerId,
      actividadId: activity.actividad_id,
      estado: "APPROVED",
      fecha: new Date().toISOString().split('T')[0], // formato yyyy-mm-dd
    };

    this.inscriptionService.createInscription(inscriptionResource).subscribe({
      next: (response) => {
        console.log('Voluntario inscrito exitosamente:', response);
        this.notificationsService.createTypedNotification('success', `Voluntario inscrito en "${activity.titulo}" exitosamente.`).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
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
        this.notificationsService.createTypedNotification('error', errorMessage).subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        this.dialogRef.close({ error: errorMessage });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

// Eliminamos la interfaz ActivityWithAvailableSlots, ya que la clase Activity lo manejará
// interface ActivityWithAvailableSlots extends Activity {
//   availableSlots: number;
// }
