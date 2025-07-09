// Description: Service for fetching volunteer data from the backend,
// including retrieving all volunteers and looking up a specific volunteer by ID.
// Author: Cassius Martel, Ainhoa Castillo

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../model/volunteers.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  //private apiUrl = 'https://voluntrack.onrender.com';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.apiUrl}/v1/volunteers`);
  }

  getVolunteerById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.apiUrl}/v1/volunteers/${id}`);
  }


}
