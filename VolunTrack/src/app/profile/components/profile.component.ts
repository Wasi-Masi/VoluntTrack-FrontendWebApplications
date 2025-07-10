// src/app/profile/components/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslatePipe } from '@ngx-translate/core';

import { ProfileService } from '../services/profile.service';
import { LoginService } from '../../login/services/login.service';
import { User } from '../model/profile.entity';
import { ApiResponse } from '../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!


interface ExtendedUser extends User {
  language?: string;
  notifications?: string;
  timezone?: string;
  inscriptions?: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    TranslatePipe
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: ExtendedUser | null = null;
  editMode = false;
  editedUser: ExtendedUser = {} as ExtendedUser;


  constructor(
    private router: Router,
    private profileService: ProfileService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }
  openHelpPdf(): void {
    const pdfUrl = 'https://www.diva-portal.org/smash/get/diva2:389641/FULLTEXT01.pdf';
    window.open(pdfUrl, '_blank');
  }
  loadUserProfile(): void {
    // MODIFICADO: Espera ApiResponse<User>
    this.profileService.getProfile().subscribe({
      next: (apiResponse: ApiResponse<User>) => { // Recibe ApiResponse
        if (apiResponse.data) { // Accede a los datos a través de .data
          this.user = { ...apiResponse.data } as ExtendedUser;
          this.editedUser = { ...this.user };

          console.log('Perfil de usuario cargado:', this.user, 'Mensaje:', apiResponse.message);

          const additionalDataString = localStorage.getItem('additional_user_data');
          if (additionalDataString) {
            const additionalData = JSON.parse(additionalDataString);
            this.user.language = additionalData.language || 'English';
            this.user.notifications = additionalData.notifications || 'All';
            this.user.timezone = additionalData.timezone || 'GMT-5';
            this.user.inscriptions = additionalData.inscriptions || 'Automatic';

            this.editedUser.language = this.user.language;
            this.editedUser.notifications = this.user.notifications;
            this.editedUser.timezone = this.user.timezone;
            this.editedUser.inscriptions = this.user.inscriptions;

            console.log('Datos adicionales cargados de localStorage:', additionalData);
          } else {
            this.user.language = 'English';
            this.user.notifications = 'All';
            this.user.timezone = 'GMT-5';
            this.user.inscriptions = 'Automatic';

            this.editedUser.language = 'English';
            this.editedUser.notifications = 'All';
            this.editedUser.timezone = 'GMT-5';
            this.editedUser.inscriptions = 'Automatic';
          }
        } else {
          // Si el backend envía un ApiResponse exitoso pero sin 'data'
          console.warn('No se encontraron datos de perfil:', apiResponse.message);
          alert(apiResponse.message || 'No se pudo cargar el perfil del usuario.');
          this.user = null; // Asegurarse de que el usuario sea null si no hay datos
        }
      },
      error: (err: any) => { // 'err' ya es un objeto Error si se propaga de handleHttpError
        console.error('Error al cargar el perfil del usuario:', err);
        const errorMessage = err.message || 'Error desconocido al cargar el perfil.'; // Accede a err.message

        if (err.status === 401 || err.status === 403) { // err.status no estará directamente en 'err' si es un Error
          // Si tu handleHttpError convierte HttpErrorResponse en Error,
          // 'err.status' no estará directamente disponible. Necesitarías
          // que handleHttpError agregue el status al objeto Error o
          // manejar HttpErrorResponse directamente aquí.
          // Para consistencia con los servicios, el servicio ya transformó el HttpErrorResponse.
          // Si necesitas el status aquí, deberías modificar tu handleHttpError para incluirlo.
          this.loginService.removeToken();
          this.router.navigate(['/login']);
          alert('Tu sesión ha expirado o no estás autorizado. Por favor, inicia sesión de nuevo.');
        } else {
          alert(errorMessage);
        }
      }
    });
  }

  logout(): void {
    this.loginService.removeToken();
    alert('Has cerrado sesión correctamente.');
    this.router.navigate(['/login']);
  }

  toggleEdit(): void {
    this.editMode = true;
    this.editedUser = { ...this.user } as ExtendedUser;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editedUser = { ...this.user } as ExtendedUser;
  }

  saveChanges(): void {
    if (!this.user || !this.user.id) {
      console.error('No hay ID de usuario para guardar cambios.');
      alert('No se pudo guardar los cambios: ID de usuario no disponible.');
      return;
    }

    const updatedProfile: User = {
      username: this.editedUser.username,
      email: this.editedUser.email,
      phoneNumber: this.editedUser.phoneNumber,
      plan: this.editedUser.plan,
      description: this.editedUser.description,
      profilePictureUrl: this.editedUser.profilePictureUrl,
      bannerPictureUrl: this.editedUser.bannerPictureUrl
      // Asegúrate de no incluir propiedades que tu backend no espera en el PUT,
      // como 'notifications' o 'inscriptions' si no son parte de la actualización de perfil principal.
      // Si son parte del objeto User pero no se actualizan por este PUT, no las envíes.
      // O, como en tu ProfileService, si ya usas Omit<User, 'id'> para el payload,
      // entonces el payload ya es correcto.
      // Si el backend acepta estas propiedades en el PUT, entonces deberías incluirlas aquí.
      // En tu ProfileService, ya las estás enviando, así que asegúrate que el backend las maneje.
    } as User; // Castear explícitamente para asegurar la compatibilidad con User (no ExtendedUser)

    // MODIFICADO: Espera ApiResponse<User>
    this.profileService.updateProfile(this.user.id, updatedProfile).subscribe({
      next: (apiResponse: ApiResponse<User>) => { // Recibe ApiResponse
        if (apiResponse.data) { // Accede a los datos actualizados a través de .data
          this.user = { ...apiResponse.data } as ExtendedUser; // Actualiza con los datos del backend

          // Estos campos adicionales no vienen del backend directamente, los gestionamos localmente
          this.user.language = this.editedUser.language;
          this.user.notifications = this.editedUser.notifications;
          this.user.timezone = this.editedUser.timezone;
          this.user.inscriptions = this.editedUser.inscriptions;

          this.editMode = false;
          alert(apiResponse.message || 'Cambios guardados exitosamente!'); // Usa el mensaje del backend
          console.log('Perfil actualizado:', this.user, 'Mensaje:', apiResponse.message);

          const additionalUserData = {
            language: this.user.language,
            notifications: this.user.notifications,
            timezone: this.user.timezone,
            inscriptions: this.user.inscriptions
          };
          localStorage.setItem('additional_user_data', JSON.stringify(additionalUserData));
          console.log('Datos adicionales actualizados en localStorage:', additionalUserData);
        } else {
          console.error('Error de negocio al guardar cambios (data es null):', apiResponse.message);
          alert(apiResponse.message || 'No se pudo guardar los cambios. Inténtalo de nuevo.');
        }
      },
      error: (err: any) => { // 'err' ya es un objeto Error si se propaga desde handleHttpError
        console.error('Error al guardar cambios:', err);
        // Accede a err.message, ya que tu handleHttpError lo propaga así.
        const errorMessage = err.message || 'Error al guardar cambios. Inténtalo de nuevo.';
        alert(errorMessage);
        // Si necesitas saber el código de estado HTTP (ej. para 403),
        // tu handleHttpError en el servicio debería incluir el status
        // en el objeto Error que propaga (ej. new Error(message, { cause: status }))
        // o podrías hacer un 'instanceof HttpErrorResponse' aquí si no lo transformas en el servicio.
      }
    });
  }
}
