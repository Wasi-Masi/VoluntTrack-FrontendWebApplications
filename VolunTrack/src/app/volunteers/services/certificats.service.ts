// Description: Service for handling certificate-related HTTP operations,
// including posting a single certificate and fetching certificates by volunteer.
// Author: Cassius Martel

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Certificate} from '../../registered-volunteers/model/registered-volunteers.entity';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private apiUrl = 'http://localhost:3000/certificates'; // Cambia al endpoint real

  constructor(private http: HttpClient) {}

  postCertificate(certificate: Certificate) {
    return this.http.post(this.apiUrl, certificate);
  }

  getCertificatesByVolunteer(volunteerId: string) {
    return this.http.get<any[]>(`${this.apiUrl}?volunteerId=${volunteerId}`);
  }
}

