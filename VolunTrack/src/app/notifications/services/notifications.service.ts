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

}
