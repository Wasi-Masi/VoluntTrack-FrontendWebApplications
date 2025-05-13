import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../dashboard/model/dashboard.entity';

@Injectable({
  providedIn: 'root'
})
export class ActivityDetailsService {

  private apiUrl = 'http://localhost:3000/activities'; // Asegúrate de que coincida con tu JSON

  constructor(private http: HttpClient) {}

  getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.apiUrl}/${id}`);
  }
}
