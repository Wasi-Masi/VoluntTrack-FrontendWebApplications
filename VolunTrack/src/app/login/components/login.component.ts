/**
 * Description: Handles user login, including validation against a user list, session creation, and navigation. Clears any existing login sessions on init.
 * Author: Marcelo Binda
 */

import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  ],
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  hide = signal(true);

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.clearLogin();
  }

  async clearLogin(): Promise<void> {
    try {
      const users = await this.http.get<any[]>('https://voluntrack.onrender.com/userlogin').toPromise();
      if (users?.length) {
        await Promise.all(users.map(user =>
          this.http.delete(`https://voluntrack.onrender.com/userlogin/${user.id}`).toPromise()
        ));
      }
    } catch (error) {
      console.error('Error clearing login:', error);
    }
  }

  async validateLogin(username: string, password: string): Promise<any | null> {
    try {
      const users = await this.http.get<any[]>('https://voluntrack.onrender.com/users').toPromise();
      return users?.find(u => u.username === username && u.password === password) ?? null;
    } catch (error) {
      console.error('Error validating login:', error);
      return null;
    }
  }

  async createLogin(user: any): Promise<void> {
    try {
      await this.http.post('https://voluntrack.onrender.com/userlogin', user).toPromise();
    } catch (error) {
      console.error('Error saving login session:', error);
    }
  }

  async handleLogin(): Promise<void> {
    if (!this.username || !this.password) {
      alert('Username and password are required.');
      return;
    }

    const user = await this.validateLogin(this.username, this.password);
    if (user) {
      await this.createLogin(user);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password.');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  clickEvent(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
