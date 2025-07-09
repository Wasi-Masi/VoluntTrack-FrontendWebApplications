// src/app/login/services/login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { SignInResource } from '../components/sign-in-resource';
import { AuthenticationResponseResource } from '../components/authentication-response-resource';
import { SignUpResource } from '../../register/components/sign-up-resource';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl;
  private ORGANIZATION_ID_KEY = 'organization_id';

  constructor(private http: HttpClient) { }


  signIn(credentials: SignInResource): Observable<AuthenticationResponseResource> {
    return this.http.post<AuthenticationResponseResource>(`${this.baseUrl}/auth/sign-in`, credentials)
      .pipe(
        tap(response => {
          if (response.token) {
            this.saveAuthenticationData(response.token, response.organizationId);
          }
        })
      );
  }


  signUp(userData: SignUpResource): Observable<AuthenticationResponseResource> {
    return this.http.post<AuthenticationResponseResource>(`${this.baseUrl}/auth/sign-up`, userData)
      .pipe(
        tap(response => {
          if (response.token) {
            this.saveAuthenticationData(response.token, response.organizationId);
          }
        })
      );
  }

  private saveAuthenticationData(token: string, organizationId?: number): void {
    localStorage.setItem('jwt_token', token);
    if (organizationId !== undefined && organizationId !== null) {
      localStorage.setItem(this.ORGANIZATION_ID_KEY, organizationId.toString());
    } else {
      localStorage.removeItem(this.ORGANIZATION_ID_KEY);
    }
  }


  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  getOrganizationId(): number | null {
    const orgId = localStorage.getItem(this.ORGANIZATION_ID_KEY);
    return orgId ? parseInt(orgId, 10) : null;
  }

  removeToken(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem(this.ORGANIZATION_ID_KEY);
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
