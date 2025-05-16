import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-volunteers-component',
  imports: [
    MatButton,
    NgForOf
  ],
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.css'
})
export class VolunteersComponent {

}
