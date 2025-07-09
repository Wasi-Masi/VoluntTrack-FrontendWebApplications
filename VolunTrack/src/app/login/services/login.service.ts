// src/app/login/services/login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignInResource } from '../components/sign-in-resource';
import { AuthenticationResponseResource } from '../components/authentication-response-resource';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  signIn(credentials: SignInResource): Observable<AuthenticationResponseResource> {
    // Concatenamos la URL base con el endpoint específico de sign-in
    return this.http.post<AuthenticationResponseResource>(`${this.baseUrl}/auth/sign-in`, credentials);
  }


  saveToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }


  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }


  removeToken(): void {
    localStorage.removeItem('jwt_token');
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
