import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
<<<<<<< Updated upstream
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


=======
import {TranslatePipe} from '@ngx-translate/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone:true,
  imports: [
    NgIf,
    FormsModule,
<<<<<<< Updated upstream
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule
=======
    TranslatePipe
>>>>>>> Stashed changes
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  editMode = false;
  editedUser: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/userlogin').subscribe(
      (res) => {
        if (res.length > 0) {
          this.user = res[0];
          this.editedUser = { ...this.user }; // clona el usuario para edición
        }
      },
      (error) => {
        console.error('Error fetching logged-in user:', error);
      }
    );
  }

  logout(): void {
    this.http.get<any[]>('http://localhost:3000/userlogin').subscribe(users => {
      const deleteRequests = users.map(user =>
        this.http.delete(`http://localhost:3000/userlogin/${user.id}`).toPromise()
      );
      Promise.all(deleteRequests).then(() => {
        this.router.navigate(['/login']);
      });
    });
  }

  toggleEdit(): void {
    this.editMode = true;
    this.editedUser = { ...this.user };
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editedUser = { ...this.user };
  }

  saveChanges(): void {
    const userId = this.user.id;

    // Actualiza en /users
    this.http.put(`http://localhost:3000/users/${userId}`, this.editedUser).subscribe(() => {
      // Luego actualiza en /userlogin
      this.http.put(`http://localhost:3000/userlogin/${userId}`, this.editedUser).subscribe(() => {
        this.user = { ...this.editedUser };
        this.editMode = false;
      });
    });
  }

}
