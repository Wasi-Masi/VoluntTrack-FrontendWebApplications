import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../model/notifications.entity';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    MatIconModule,
    TranslatePipe
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications: Notification[] = [];
  isDrawerOpen = false;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.loadNotifications();
    window.addEventListener('openNotifications', () => {
        this.isDrawerOpen = true;
        this.loadNotifications();
      }
    );
    window.addEventListener('closeNotifications', () => this.isDrawerOpen = false);
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  loadNotifications() {
    this.notificationsService.getNotifications().subscribe({
      next: (data) => (this.notifications = data),
      error: (err) => console.error('Error loading notifications', err)
    });
  }


  deleteNotification(noti: Notification) {
    this.notificationsService.deleteNotification(noti).subscribe(() => {
      this.loadNotifications();
    });
  }

  deleteAllNotifications() {
    this.notificationsService.deleteAllNotifications().subscribe(() => {
      this.loadNotifications();
    });
  }
}
