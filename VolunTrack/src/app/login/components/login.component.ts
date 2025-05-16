import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.clearLogin();
  }

  async clearLogin(): Promise<void> {
    try {
      const users: any[] = await this.http.get<any[]>('http://localhost:3000/userlogin').toPromise() ?? [];
      if (users && users.length > 0) {
        await Promise.all(
          users.map(user =>
            this.http.delete(`http://localhost:3000/userlogin/${user.id}`).toPromise()
          )
        );
      }
      console.log('Previous session cleared.');
    } catch (error) {
      console.error('Error clearing login:', error);
    }
  }

  async validateLogin(username: string, password: string): Promise<any> {
    try {
      const users = await this.http.get<any[]>('http://localhost:3000/users').toPromise() ?? [];
      return users.find(user => user.username === username && user.password === password) || null;
    } catch (error) {
      console.error('Error validating login:', error);
      return null;
    }
  }

  async createLogin(user: any): Promise<void> {
    const sessionUser = {
      id: user.id,
      username: user.username,
      password: user.password,
      email: user.email,
      phone: user.phone,
      pfp: user.pfp,
      plan: user.plan,
      banner: user.banner,
      description: user.description,
    };

    try {
      await this.http.post('http://localhost:3000/userlogin', sessionUser).toPromise();
      console.log('User session saved.');
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
}
