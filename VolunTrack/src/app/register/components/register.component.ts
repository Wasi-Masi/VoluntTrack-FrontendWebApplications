import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [
    FormsModule
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
