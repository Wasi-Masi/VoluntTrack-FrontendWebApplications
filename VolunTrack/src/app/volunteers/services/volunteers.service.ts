import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../model/volunteers.entity';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.apiUrl}/volunteers`);
  }

  getVolunteerById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.apiUrl}/volunteers/${id}`);
  }


}
