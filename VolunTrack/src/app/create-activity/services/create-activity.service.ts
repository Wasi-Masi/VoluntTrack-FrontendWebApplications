import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../dashboard/model/dashboard.entity';


@Injectable({
  providedIn: 'root'
})
export class CreateActivityService {
  private apiUrl = 'http://localhost:3000/activities';

  constructor(private http: HttpClient) {}

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activity);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl);
  }

}
