/*
Description:
This Angular standalone component provides a form to create a new activity,
handling input binding, form submission, and interaction with backend services
to save the activity and trigger notifications.

Author: Ainhoa Castillo
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import { Activity } from '../../dashboard/model/dashboard.entity';
import {MatButton} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateActivityService } from '../services/create-activity.service';
import { NotificationsService} from '../../notifications/services/notifications.service';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButton,
    MatIconModule,
    TranslateModule
  ]
})
export class CreateActivityComponent {
  activity: Activity = new Activity(
    '',
    '',
    '',
    [],
    '',
    '',
    '',
    '',
    '',
    [],
    [],
    0,
    true
  );

  instructions: string = '';
  purpose: string = '';
  picturesInput: string = '';

  constructor(
    private createService: CreateActivityService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) {}

  onSubmit() {
    const pictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    this.createService.getActivities().subscribe(existingActivities => {
      const maxIdNumber = existingActivities.length > 0
        ? Math.max(...existingActivities.map(a => Number(a.id)))
        : 0;

      const newActivity: Activity = {
        ...this.activity,
        id: (maxIdNumber + 1).toString(),
        inscriptionCount: 0,
        isInscriptionOpen: true,
        instructions: this.instructions
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0),
        purpose: this.purpose
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0),
        dashboardPicture: pictures[0] || '',
        pictures: pictures
      };

      this.createService.createActivity(newActivity).subscribe(() => {
        this.notificationsService.createTypedNotification('new-activity').subscribe(() => {
          window.dispatchEvent(new Event('openNotifications'));
        });
        this.router.navigate(['/dashboard']);
      });
    });
  }


  discard() {
    this.router.navigate(['/dashboard']);
  }
}
