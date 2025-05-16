/**
 * Description:
 * Component to handle user registration by collecting user details,
 * validating inputs, and sending the data to the backend API.
 * On successful registration, navigates to the login page.
 *
 * Author: Marcelo Binda
 */


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

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
    TranslateModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  phone = '';
  pfp = '';
  banner = '';
  description = '';
  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    if (
      this.username &&
      this.password &&
      this.confirmPassword &&
      this.password === this.confirmPassword &&
      this.email &&
      this.phone &&
      this.pfp &&
      this.banner &&
      this.description
    ) {
      const newUser = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
        pfp: this.pfp,
        plan: 'basic',
        banner: this.banner,
        description: this.description,
        language: 'English',
        notifications: 'All',
        timezone: 'GMT-5',
        inscriptions: 'Automatic'
      };

      this.http.post('http://localhost:3000/users', newUser).subscribe({
        next: () => {
          this.goToLogin();
        },
        error: err => {
          console.error('Error creating user:', err);
          alert('Error al registrar usuario.');
        }
      });
    } else {
      alert('Complete correctamente todos los campos.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
