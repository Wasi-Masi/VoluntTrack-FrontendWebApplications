// Description: Service for handling certificate-related HTTP operations,
// including posting a single certificate and fetching certificates by volunteer.
// Author: Cassius Martel

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Certificate} from '../../registered-volunteers/model/registered-volunteers.entity';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private apiUrl = environment.apiUrl;
  private basePath: string = `${this.apiUrl}/v1/certificates`;

  constructor(private http: HttpClient) {}

  postCertificate(certificate: Certificate) {
    return this.http.post(this.basePath, certificate);
  }

  getCertificatesByVolunteer(volunteerId: number) {
    return this.http.get<any[]>(`${this.basePath}/by-volunteer/${volunteerId}`);
  }
}
