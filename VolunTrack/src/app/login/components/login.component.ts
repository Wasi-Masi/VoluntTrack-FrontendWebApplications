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

    this.loginService.signIn(credentials).subscribe({
      next: (response) => {
        this.loginService.saveToken(response.token);
        console.log('Login successful! Token:', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid username or password. Please try again.');
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
