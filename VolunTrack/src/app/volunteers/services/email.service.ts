import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = `${environment.apiUrl}/email/send`;

  constructor(private http: HttpClient) {}

  sendEmail(request: EmailRequest): Observable<string> {
    return this.http.post(this.apiUrl, request, { responseType: 'text' });
  }
}
