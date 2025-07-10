import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../model/notifications.entity';
import { CommonModule, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiResponse } from '../../shared/models/api-response.interface'; // Import ApiResponse

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
  loadingNotifications = false; // Add loading state
  errorLoadingNotifications: string | null = null; // Add error message state

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
    this.loadingNotifications = true; // Set loading to true
    this.errorLoadingNotifications = null; // Clear previous errors

    this.notificationsService.getNotifications().subscribe({
      next: (apiResponse: ApiResponse<Notification[]>) => { // Expect ApiResponse
        if (apiResponse.data) {
          this.notifications = apiResponse.data.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
          console.log('[DEBUG] Notificaciones cargadas:', this.notifications, 'Mensaje:', apiResponse.message);
        } else {
          console.warn('[WARN] No se encontraron datos de notificaciones:', apiResponse.message);
          this.notifications = []; // Ensure the array is empty if no data
          this.errorLoadingNotifications = apiResponse.message || 'No notifications found.';
        }
        this.loadingNotifications = false; // Set loading to false
      },
      error: (err: any) => { // 'err' is the Error object propagated by service's handleHttpError
        console.error('[ERROR] Error cargando notificaciones:', err);
        this.errorLoadingNotifications = err.message || 'Error loading notifications.'; // Use err.message
        this.notifications = []; // Clear notifications on error
        this.loadingNotifications = false; // Set loading to false
      }
    });
  }

  deleteNotification(id: number | undefined) {
    if (id) {
      this.notificationsService.deleteNotification(id).subscribe({
        next: (apiResponse: ApiResponse<void>) => { // Expect ApiResponse<void>
          console.log(`[DEBUG] Notificación ${id} eliminada:`, apiResponse.message);
          this.loadNotifications(); // Reload to update the list
        },
        error: (err: any) => {
          console.error(`[ERROR] Error al eliminar notificación ${id}:`, err);
          // Optionally display an error notification or message to the user
        }
      });
    } else {
      console.warn('[WARN] No se puede eliminar notificación: ID indefinido');
    }
  }

  deleteAllNotifications() {
    this.notificationsService.deleteAllNotifications().subscribe({
      next: (apiResponse: ApiResponse<any[]>) => { // Expect ApiResponse<any[]>
        console.log('[DEBUG] Todas las notificaciones eliminadas:', apiResponse.message);
        this.loadNotifications(); // Reload to update the list
      },
      error: (err: any) => {
        console.error('[ERROR] Error al eliminar todas las notificaciones:', err);
        // Optionally display an error notification or message to the user
      }
    });
  }
}
