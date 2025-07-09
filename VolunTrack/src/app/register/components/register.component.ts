// src/app/register/components/register/register.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';

import { LoginService } from '../../login/services/login.service';
import { SignUpResource } from './sign-up-resource';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
    MatSelectModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  phoneNumber = '';
  profilePictureUrl = '';
  bannerPictureUrl = '';
  description = '';
  plan = 'Gratis';

  language: string = 'English';
  notifications: string = 'All';
  timezone: string = 'GMT-5';
  inscriptions: string = 'Automatic';


  constructor(private router: Router, private loginService: LoginService) {}

  registerUser() {
    if (
      !this.username ||
      !this.password ||
      !this.confirmPassword ||
      !this.email ||
      !this.phoneNumber ||
      !this.profilePictureUrl ||
      !this.bannerPictureUrl ||
      !this.description ||
      !this.plan
    ) {
      alert('Por favor, complete todos los campos requeridos para el registro.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const newUser: SignUpResource = {
      username: this.username,
      password: this.password,
      email: this.email,
      phoneNumber: this.phoneNumber,
      plan: this.plan,
      description: this.description,
      profilePictureUrl: this.profilePictureUrl,
      bannerPictureUrl: this.bannerPictureUrl
    };

    this.loginService.signUp(newUser).subscribe({
      next: (response) => {

        const additionalUserData = {
          language: this.language,
          notifications: this.notifications,
          timezone: this.timezone,
          inscriptions: this.inscriptions
        };
        localStorage.setItem('additional_user_data', JSON.stringify(additionalUserData));

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.goToLogin();
      },
      error: (err) => {
        const errorMessage = err.error && err.error.message ? err.error.message : 'Error al registrar usuario. Inténtalo de nuevo.';
        alert(errorMessage);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
