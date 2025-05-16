/**
 * Service to manage registered volunteers data, including fetching registrations by activity,
 * retrieving volunteer details, and updating attendance status.
 *
 * Author: Cassius Martel
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisteredVolunteersEntity } from '../model/registered-volunteers.entity';
import {Volunteer } from '../../volunteers/model/volunteers.entity'

@Injectable({
  providedIn: 'root'
})
export class RegisteredVolunteersService {
  private apiUrl = 'https://voluntrack.onrender.com/registers';

  constructor(private http: HttpClient) { }

  getRegistrationsByActivity(activityId: string): Observable<RegisteredVolunteersEntity[]> {
    const params = new HttpParams().set('activityId', activityId);

    return this.http.get<RegisteredVolunteersEntity[]>(this.apiUrl, { params });
  }
  getVolunteerById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`https://voluntrack.onrender.com/volunteers/${id}`);
  }

  updateAttendance(registrationId: string, attendance: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${registrationId}`, { attendance });
  }
}
