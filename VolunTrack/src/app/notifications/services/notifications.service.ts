/*
Description: Service to manage CRUD operations for notifications, including creating typed notifications with preset messages.
Author: Ainhoa Castillo
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Notification } from '../model/notifications.entity'
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl = 'http://localhost:3000/notifications';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl);
  }

  createNotification(noti: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, noti);
  }

  deleteNotification(noti: Notification): Observable<Notification> {
    return this.http.delete<Notification>(`${this.apiUrl}/${noti.id}`);
  }

  deleteAllNotifications(): Observable<any> {
    return this.getNotifications().pipe(
      switchMap(notiList => {
        const deletes = notiList.map(noti =>
          this.http.delete(`${this.apiUrl}/${noti.id}`)
        );
        return forkJoin(deletes);
      })
    );
  }

  createTypedNotification(type: string): Observable<Notification> {
    return this.getNotifications().pipe(
      switchMap(existingNotis => {
        const maxId = existingNotis.length > 0
          ? Math.max(...existingNotis.map(n => +n.id))
          : 0;
        const newId = (maxId + 1).toString();
        const createdAt = new Date().toISOString();

        let title = '';
        let message = '';

        switch (type) {
          case 'signup':
            title = '¡Bienvenido a VolunTrack!';
            message = 'Tu cuenta ha sido creada exitosamente. Ya puedes unirte a actividades.';
            break;
          case 'login':
            title = 'Sesión iniciada';
            message = 'Has iniciado sesión correctamente.';
            break;
          case 'new-activity':
            title = 'Actividad creada';
            message = 'Has creado una nueva actividad de voluntariado. ¡Comparte para sumar voluntarios!';
            break;
          case 'open-inscriptions':
            title = 'Inscripciones abiertas';
            message = 'Acabas de abrir inscripciones para la actividad seleccionada. ¡Sean todos bienvenidos!';
            break;
          case 'certificate':
            title = 'Certificados disponibles';
            message = 'Has enviado certificados a todos los participantes involucrados. ¡Sigue valorando el compromiso!';
            break;
          case 'reminder':
            title = 'Recordatorio de actividad';
            message = 'Tienes una actividad programada pronto. No olvides revisar los detalles.';
            break;
          case 'mail':
            title = 'Correo enviado';
            message = 'Has enviado correctamente un correo al voluntario seleccionado.';
            break;
          default:
            title = 'Notificación';
            message = 'Tienes una nueva notificación en VolunTrack.';
        }

        const newNotification = new Notification(newId, title, message, createdAt);
        return this.createNotification(newNotification);
      })
    );
  }

}
