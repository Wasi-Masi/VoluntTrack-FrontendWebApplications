// src/app/volunteers/components/certificates-dialog/certificates-dialog.component.ts
// (Asumiendo que este es el path correcto para el componente)

// CertificatesDialogComponent: Dialog component that shows the certificates of a volunteer.
// It receives the volunteerId through MAT_DIALOG_DATA injection,
// fetches the certificates using CertificatesService on initialization,
// and displays them in a list. Includes error handling and debug logging.
//Author: Cassius Martel

import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {CertificatesService} from '../../services/certificats.service'; // ¡VERIFICA ESTA RUTA!
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

import { ApiResponse } from '../../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!


@Component({
  selector: 'app-certificates-dialog',
  templateUrl: './certificates-dialog.component.html',
  standalone: true,
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
    NgForOf,
    TranslatePipe
  ],
  styleUrls: ['./certificates-dialog.component.css']
})
export class CertificatesDialogComponent implements OnInit {
  certificates: any[] = []; // Mantener 'any[]' si el backend devuelve un array de objetos genéricos
  loadingCertificates: boolean = true; // Añadir estado de carga
  errorMessage: string = ''; // Añadir para mensajes de error al usuario

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { volunteerId: number },
    private certificatesService: CertificatesService
  ) {}

  ngOnInit() {
    this.loadCertificates();
  }

  loadCertificates() {
    this.loadingCertificates = true;
    this.errorMessage = ''; // Limpiar errores anteriores

    // MODIFICADO: Espera ApiResponse<any[]> (o ApiResponse<Certificate[]>)
    this.certificatesService.getCertificatesByVolunteer(this.data.volunteerId).subscribe({
      next: (apiResponse: ApiResponse<any[]>) => { // Recibe ApiResponse
        if (apiResponse.data) { // Accede a los datos a través de .data
          console.log('Certificados recibidos:', apiResponse.data, 'Mensaje:', apiResponse.message);
          this.certificates = apiResponse.data;
        } else {
          console.warn('No se encontraron certificados o no hay datos:', apiResponse.message);
          this.certificates = []; // Asegurarse de que el array esté vacío
          this.errorMessage = apiResponse.message || 'No se encontraron certificados para este voluntario.';
        }
        this.loadingCertificates = false;
      },
      error: (err: any) => { // 'err' ya es un objeto Error
        console.error('Error al cargar certificados:', err);
        this.loadingCertificates = false;
        this.certificates = []; // Asegurarse de que el array esté vacío en caso de error
        this.errorMessage = err.message || 'Ocurrió un error al cargar los certificados.'; // Usa err.message
      }
    });
  }
}
