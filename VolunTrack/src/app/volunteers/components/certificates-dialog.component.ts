import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {CertificatesService} from '../services/certificats.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-certificates-dialog',
  templateUrl: './certificates-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatDialogTitle,
    MatDialogClose,
    MatButton,
    NgForOf
  ],
  styleUrls: ['./certificates-dialog.component.css']
})
export class CertificatesDialogComponent implements OnInit {
  certificates: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { volunteerId: string },
    private certificatesService: CertificatesService
  ) {}

  ngOnInit() {
    console.log('CertificatesDialogComponent initialized with volunteerId:', this.data.volunteerId);
    this.loadCertificates();
  }

  loadCertificates() {
    this.certificatesService.getCertificatesByVolunteer(this.data.volunteerId).subscribe({
      next: (certs) => {
        console.log('Certificados recibidos:', certs);
        this.certificates = certs;
      },
      error: (err) => {
        console.error('Error al cargar certificados', err);
      }
    });
  }
}

