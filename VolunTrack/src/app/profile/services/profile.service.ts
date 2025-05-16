import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { ProfileEntity } from '../model/profile.entity';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ProfileEntity[]> {
    return this.http.get<ProfileEntity[]>(`${this.apiUrl}/users`);
  }

  createUser(profile: Omit<ProfileEntity, 'id'>): Observable<ProfileEntity> {
    return this.http.post<ProfileEntity>(`${this.apiUrl}/users`, profile);
  }

  // ✅ Guarda el usuario logueado en /userlogin
  setLoggedUser(user: ProfileEntity): Observable<ProfileEntity> {
    return this.http.post<ProfileEntity>(`${this.apiUrl}/userlogin`, user);
  }

  // ✅ Borra al usuario logueado
  clearLoggedUser(): Observable<any> {
    return this.http.get<ProfileEntity[]>(`${this.apiUrl}/userlogin`).pipe(
      switchMap((users: ProfileEntity[]) => {
        const deleteRequests = users.map((user: ProfileEntity) =>
          this.http.delete(`${this.apiUrl}/userlogin/${user.id}`)
        );
        return deleteRequests.length ? deleteRequests[0] : of(null);
      })
    );
  }
}
