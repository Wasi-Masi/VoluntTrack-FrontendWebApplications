/*
Description:
Service to handle HTTP requests related to activity creation, retrieval,
and updating via a REST API.

Author: Ainhoa Castillo
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../dashboard/model/dashboard.entity';


@Injectable({
  providedIn: 'root'
})
export class CreateActivityService {
  private apiUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.apiUrl}activities`, activity);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}activities`);
  }

  updateActivity(activity: Activity): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}activities/${activity.actividad_id}`, activity);
  }

}
