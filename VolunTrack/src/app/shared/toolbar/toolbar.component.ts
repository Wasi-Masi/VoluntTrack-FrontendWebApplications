/*
  Description: Toolbar component for navigation including dashboard, volunteers, profile links, and notifications.
  Author: Cassius Martel
*/

import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatIconModule,
    MatIconButton,
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToVolunteers() {
    this.router.navigate(['/volunteers']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  openNotifications() {
    window.dispatchEvent(new Event('openNotifications'));
  }

}
