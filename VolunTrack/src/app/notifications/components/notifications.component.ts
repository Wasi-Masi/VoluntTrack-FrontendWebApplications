import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../model/notifications.entity';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    MatIconModule,
    TranslatePipe,
    MatButtonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  isDrawerOpen = false;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.loadNotifications();
    window.addEventListener('openNotifications', () => {
      this.isDrawerOpen = true;
      this.loadNotifications();
    });
    window.addEventListener('closeNotifications', () => this.isDrawerOpen = false);
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  loadNotifications() {
    this.notificationsService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = data.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        console.log('[DEBUG] Notificaciones cargadas:', this.notifications);
      },
      error: (err) => {
        console.error('[ERROR] Error cargando notificaciones:', err);
      }
    });
  }

  deleteNotification(id: number | undefined) {
    if (id) {
      this.notificationsService.deleteNotification(id).subscribe({
        next: () => {
          console.log(`[DEBUG] Notificación ${id} eliminada`);
          this.loadNotifications();
        },
        error: (err) => {
          console.error(`[ERROR] Error al eliminar notificación ${id}:`, err);
        }
      });
    } else {
      console.warn('[WARN] No se puede eliminar notificación: ID indefinido');
    }
  }

  deleteAllNotifications() {
    this.notificationsService.deleteAllNotifications().subscribe({
      next: () => {
        console.log('[DEBUG] Todas las notificaciones eliminadas');
        this.loadNotifications();
      },
      error: (err) => {
        console.error('[ERROR] Error al eliminar todas las notificaciones:', err);
      }
    });
  }
}
