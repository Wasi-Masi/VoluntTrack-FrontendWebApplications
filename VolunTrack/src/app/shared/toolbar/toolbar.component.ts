import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { Router } from '@angular/router';
import {NotificationsComponent} from '../../notifications/components/notifications.component';

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatIconModule,
    MatIconButton,
    NotificationsComponent,
    RouterOutlet
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
