// src/app/notifications/services/notifications.service.ts

import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap, tap, catchError, throwError } from 'rxjs'; // Importar operadores de RxJS
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; // Importar HttpErrorResponse

import { Notification } from '../model/notifications.entity';
import { NotificationType } from '../model/notification-type.enum'; // ¡Importación corregida para NotificationType!
import { ApiResponse } from '../../shared/models/api-response.interface'; // Asegúrate de que esta ruta sea correcta

import { environment } from '../../../environments/environment';
import { LoginService } from '../../login/services/login.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl = `${environment.apiUrl}/notifications`;

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

  /**
   * Obtiene todas las notificaciones del usuario logueado.
   * @returns Un Observable que emite un ApiResponse que contiene un array de objetos Notification.
   */
  getNotifications(): Observable<ApiResponse<Notification[]>> {
    const headers = this.getAuthHeaders();
    return this.http.get<ApiResponse<Notification[]>>(this.apiUrl, { headers: headers }).pipe(
      tap(response => {
        if (!response.data || response.data.length === 0) {
          console.warn('No notifications found:', response.message);
        } else {
          console.log('Notifications fetched successfully:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  /**
   * Crea una notificación con los datos básicos.
   * Se recomienda usar `createTypedNotification2` para un control más explícito del tipo y mensaje.
   * @param noti Objeto Notification con el tipo, id y tipo de destinatario, y mensaje.
   * @returns Un Observable que emite un ApiResponse que contiene el objeto Notification creado.
   */
  createNotification(noti: Notification): Observable<ApiResponse<Notification>> {
    const headers = this.getAuthHeaders();
    // El payload ahora incluye 'type', 'recipientId', 'recipientType' y 'message'
    const payload = {
      type: noti.type,
      recipientId: noti.recipientId,
      recipientType: noti.recipientType,
      message: noti.message // Asegurarse de enviar el mensaje
    };
    return this.http.post<ApiResponse<Notification>>(this.apiUrl, payload, { headers: headers }).pipe(
      tap(response => {
        if (response.data) {
          console.log('Notification created successfully:', response.message, response.data);
        } else {
          console.warn('Notification creation responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  /**
   * Elimina una notificación por su ID.
   * @param id El ID de la notificación a eliminar.
   * @returns Un Observable que emite un ApiResponse<void> al completar la eliminación.
   */
  deleteNotification(id: number): Observable<ApiResponse<void>> {
    const headers = this.getAuthHeaders();
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`, { headers: headers }).pipe(
      tap(response => {
        console.log(`Notification with ID ${id} deleted successfully:`, response.message);
      }),
      catchError(this.handleHttpError)
    );
  }

  /**
   * Elimina todas las notificaciones del usuario logueado.
   * @returns Un Observable que emite un ApiResponse que contiene un array de respuestas de eliminación.
   */
  deleteAllNotifications(): Observable<ApiResponse<any[]>> { // `any[]` o `void[]` dependiendo de la respuesta del backend
    const headers = this.getAuthHeaders();
    return this.getNotifications().pipe(
      switchMap(apiResponse => {
        if (!apiResponse.data || apiResponse.data.length === 0) {
          console.log('No notifications to delete.');
          // Si no hay notificaciones para eliminar, devuelve una respuesta exitosa vacía de ApiResponse
          return new Observable<ApiResponse<any[]>>(observer => {
            observer.next({message: 'No notifications to delete.', data: [] });
            observer.complete();
          });
        }
        const deletes = apiResponse.data.map(noti =>
          this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${noti.id}`, { headers: headers })
        );
        return forkJoin(deletes).pipe(
          tap(() => console.log('All notifications deleted successfully.')),
          // Envuelve las respuestas individuales en un ApiResponse final.
          switchMap(results => {
            const successMessages = results.map(r => r.message || 'Deleted').join(', ');
            return [ { message: `All notifications processed. Messages: ${successMessages}`, data: results } as ApiResponse<any[]> ];
          })
        );
      }),
      catchError(this.handleHttpError)
    );
  }

  /**
   * ESTE ES EL MÉTODO ANTIGUO. Se mantiene por compatibilidad, pero no realiza la llamada real a la API.
   * Por favor, utiliza `createTypedNotification2` para enviar notificaciones reales.
   */
  createTypedNotification(
    type: string,
    recipientId: number,
    recipientType: 'VOLUNTEER' | 'ORGANIZATION',
    customMessage?: string
  ): Observable<Notification> {
    console.warn('[AVISO] createTypedNotification fue llamado pero está desactivado y solo retorna un dummy. Usa createTypedNotification2.');
    // Retorna un Observable vacío con un dummy Notification (si lo necesitas para que los `.subscribe()` no rompan)
    const dummy = new Notification({
      id: 0,
      title: '', // El título es obligatorio en el constructor de Notification
      message: customMessage || '', // Usar el mensaje personalizado o cadena vacía
      createdAt: new Date().toISOString(),
      type: type as NotificationType, // Cast para compatibilidad con el constructor
      recipientId,
      recipientType
    });
    return new Observable<Notification>(observer => {
      observer.next(dummy);
      observer.complete();
    });
  }


  /**
   * Crea una notificación con un tipo específico y un mensaje opcional,
   * enviando la solicitud real a la API.
   * Este es el método preferido para crear notificaciones desde los componentes.
   * @param type El tipo de notificación (debe ser un valor del enum NotificationType).
   * @param recipientId El ID del destinatario de la notificación.
   * @param recipientType El tipo de destinatario ('VOLUNTEER' o 'ORGANIZATION').
   * @param customMessage (Opcional) Un mensaje personalizado para la notificación.
   * @returns Un Observable que emite un ApiResponse que contiene el objeto Notification creado.
   */
  createTypedNotification2(
    type: NotificationType, // ¡Ahora usa el enum `NotificationType`!
    recipientId: number,
    recipientType: 'VOLUNTEER' | 'ORGANIZATION',
    customMessage?: string
  ): Observable<ApiResponse<Notification>> { // ¡Ahora devuelve ApiResponse!
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

    return this.http.post<ApiResponse<Notification>>(this.apiUrl, payload, { headers }).pipe(
      tap(response => {
        if (response.data) {
          console.log('Typed notification created successfully using createTypedNotification2:', response.message, response.data);
        } else {
          console.warn('Typed notification creation via createTypedNotification2 responded with no data:', response.message);
        }
      }),
      catchError(this.handleHttpError)
    );
  }

  // Método centralizado para el manejo de errores HTTP
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Errores del lado del servidor
      if (error.error && typeof error.error === 'object' && 'message' in error.error) {
        errorMessage = `Server-side error (${error.status}): ${error.error.message}`;
      } else if (error.error && typeof error.error === 'string') {
        errorMessage = `Server-side error (${error.status}): ${error.error}`;
      } else {
        errorMessage = `Server-side error (${error.status}): ${error.message || 'No specific error message from server.'}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Propagar el error
  }
}
