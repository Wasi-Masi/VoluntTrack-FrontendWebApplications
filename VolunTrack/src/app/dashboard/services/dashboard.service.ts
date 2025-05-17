import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../model/dashboard.entity';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://voluntrack.onrender.com';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/activities`);
  }
}
