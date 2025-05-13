import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardEntity } from '../model/dashboard.entity';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<DashboardEntity[]> {
    return this.http.get<DashboardEntity[]>(`${this.apiUrl}/activities`);
  }
}
