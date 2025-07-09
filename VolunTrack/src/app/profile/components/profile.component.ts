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
    this.profileService.getProfile().subscribe({
      next: (data: User) => {
        this.user = { ...data } as ExtendedUser;
        this.editedUser = { ...this.user };

        console.log('Perfil de usuario cargado:', this.user);

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
      },
      error: (err) => {
        console.error('Error al cargar el perfil del usuario:', err);
        if (err.status === 401 || err.status === 403) {
          this.loginService.removeToken();
          this.router.navigate(['/login']);
          alert('Tu sesión ha expirado o no estás autorizado. Por favor, inicia sesión de nuevo.');
        } else {
          alert('No se pudo cargar el perfil del usuario.');
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
    };

    this.profileService.updateProfile(this.user.id, updatedProfile).subscribe({
      next: (data: User) => {
        this.user = { ...data } as ExtendedUser;

        this.user.language = this.editedUser.language;
        this.user.notifications = this.editedUser.notifications;
        this.user.timezone = this.editedUser.timezone;
        this.user.inscriptions = this.editedUser.inscriptions;

        this.editMode = false;
        alert('Cambios guardados exitosamente!');
        console.log('Perfil actualizado:', this.user);

        const additionalUserData = {
          language: this.user.language,
          notifications: this.user.notifications,
          timezone: this.user.timezone,
          inscriptions: this.user.inscriptions
        };
        localStorage.setItem('additional_user_data', JSON.stringify(additionalUserData));
        console.log('Datos adicionales actualizados en localStorage:', additionalUserData);
      },
      error: (err) => {
        console.error('Error al guardar cambios:', err);
        const errorMessage = err.error && err.error.message ? err.error.message : 'Error al guardar cambios. Inténtalo de nuevo.';
        alert(errorMessage);
      }
    });
  }
}
