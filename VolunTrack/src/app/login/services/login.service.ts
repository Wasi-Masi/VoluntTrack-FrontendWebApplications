// src/app/login/services/login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignInResource } from '../components/sign-in-resource';
import { AuthenticationResponseResource } from '../components/authentication-response-resource';
import { SignUpResource } from '../../register/components/sign-up-resource';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  signIn(credentials: SignInResource): Observable<AuthenticationResponseResource> {
    return this.http.post<AuthenticationResponseResource>(`${this.baseUrl}/auth/sign-in`, credentials);
  }


  signUp(userData: SignUpResource): Observable<AuthenticationResponseResource> {
    return this.http.post<AuthenticationResponseResource>(`${this.baseUrl}/auth/sign-up`, userData);
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
