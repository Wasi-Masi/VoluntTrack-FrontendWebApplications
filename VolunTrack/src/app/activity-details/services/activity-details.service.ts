/**
 * Description:
 * Service to fetch detailed information about activities from the backend API.
 * Provides a method to get activity data by its ID.
 *
 * Author: Victor Ortiz
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../dashboard/model/dashboard.entity';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  private apiUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.apiUrl}activities/${id}`);
  }

}
