// src/app/login/components/login/login.component.ts

import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

import { LoginService } from '../services/login.service';
import { SignInResource } from './sign-in-resource';
import { ApiResponse } from '../../shared/models/api-response.interface'; // ¡IMPORTAR APIRESPONSE!

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe
  ],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  hide = signal(true);

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.removeToken();
  }


  async handleLogin(): Promise<void> {
    if (!this.username || !this.password) {
      alert('Username and password are required.');
      return;
    }

    const credentials: SignInResource = {
      username: this.username,
      password: this.password
    };

    // MODIFICADO: Espera ApiResponse<any> (o el tipo específico que devuelve signIn, ej. ApiResponse<LoginResponse>)
    this.loginService.signIn(credentials).subscribe({
      next: (apiResponse: ApiResponse<any>) => { // Recibe ApiResponse
        console.log('Login successful:', apiResponse.message); // Para depuración, usa el mensaje del backend
        // Si apiResponse.data contiene el token o datos del usuario, puedes acceder a ellos aquí.
        // El servicio LoginService ya debería estar guardando el token internamente.
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => { // 'err' ya es un objeto Error si se propaga desde handleHttpError
        console.error('Login failed:', err);
        // Accede a err.message, ya que tu handleHttpError lo propaga así.
        // El mensaje de error ahora será más específico si viene del backend.
        const errorMessage = err.message || 'Invalid username or password. Please try again.';
        alert(errorMessage);
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  clickEvent(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
