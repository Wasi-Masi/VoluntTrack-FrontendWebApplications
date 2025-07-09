// src/app/profile/services/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { User } from '../model/profile.entity';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}



  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`);
  }

  updateProfile(userId: number, profileData: User): Observable<User> {
    const updatePayload: Omit<User, 'id'> = {
      username: profileData.username,
      email: profileData.email,
      phoneNumber: profileData.phoneNumber,
      plan: profileData.plan,
      description: profileData.description,
      profilePictureUrl: profileData.profilePictureUrl,
      bannerPictureUrl: profileData.bannerPictureUrl,
      language: profileData.language,
      notifications: profileData.notifications,
      timezone: profileData.timezone,
      inscriptions: profileData.inscriptions
    };
    return this.http.put<User>(`${this.baseUrl}/users/${userId}`, updatePayload);
  }
}
