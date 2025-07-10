// src/app/notifications/services/notifications.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from '../model/notifications.entity';
import { forkJoin, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl = `${environment.apiUrl}/v1/notifications`;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.loginService.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getNotifications(): Observable<Notification[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Notification[]>(this.apiUrl, { headers: headers });
  }


  createNotification(noti: Notification): Observable<Notification> {
    const headers = this.getAuthHeaders();
    // ¡MODIFICADO! El payload ahora solo incluye 'type', 'recipientId', y 'recipientType'
    const payload = {
      type: noti.type,         // ¡NUEVO! El tipo de notificación (ej. 'SIGNUP')
      recipientId: noti.recipientId, // ¡NUEVO! El ID del destinatario
      recipientType: noti.recipientType // ¡NUEVO! El tipo de destinatario (ej. 'VOLUNTEER')
    };
    return this.http.post<Notification>(this.apiUrl, payload, { headers: headers });
  }

  deleteNotification(id: number): Observable<void> { // ID es 'number'
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: headers });
  }

  deleteAllNotifications(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.getNotifications().pipe(
      switchMap(notiList => {
        const deletes = notiList.map(noti =>
          this.http.delete(`${this.apiUrl}/${noti.id}`, { headers: headers })
        );
        return forkJoin(deletes);
      })
    );
  }

  createTypedNotification(
    type: string,
    recipientId: number,
    recipientType: 'VOLUNTEER' | 'ORGANIZATION',
    customMessage?: string
  ): Observable<Notification> {
    console.warn('[AVISO] createTypedNotification fue llamado pero está desactivado.');
    // Retorna un Observable vacío con un dummy Notification (si lo necesitas para que los `.subscribe()` no rompan)
    const dummy = new Notification({
      id: 0,
      title: '',
      message: '',
      createdAt: new Date().toISOString(),
      type: undefined,
      recipientId,
      recipientType
    });
    return new Observable<Notification>(observer => {
      observer.next(dummy);
      observer.complete();
    });
  }


  createTypedNotification2(
    type: string,
    recipientId: number,
    recipientType: 'VOLUNTEER' | 'ORGANIZATION',
    customMessage?: string
  ): Observable<Notification> {
    const headers = this.getAuthHeaders();

    const payload: any = {
      type,
      recipientId,
      recipientType
    };

    // Si se proporciona un mensaje personalizado, se incluye en el payload
    if (customMessage) {
      payload.message = customMessage;
    }

    return this.http.post<Notification>(this.apiUrl, payload, { headers });
  }
}
