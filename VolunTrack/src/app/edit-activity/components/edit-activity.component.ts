import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Activity } from '../../dashboard/model/dashboard.entity';
import { CreateActivityService } from '../../create-activity/services/create-activity.service';

@Component({
  selector: 'app-edit-activity',
  standalone: true,
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ]
})
export class EditActivityComponent implements OnInit {
  activity: Activity = new Activity(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    '',
    'Inactiva',
    0,
    []
  );

  instructions: string = '';
  purpose: string = '';
  picturesInput: string = '';

  constructor(
    private route: ActivatedRoute,
    private activityService: CreateActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      this.activityService.getActivities().subscribe(activities => {
          const existing = activities.find(a => a.actividad_id === id);
          if (existing) {
            this.activity = existing;
            this.instructions = existing.instrucciones;
            this.purpose = existing.proposito;
            this.picturesInput = existing.imagenes.join('\n');
          } else {
            console.warn(`Activity with ID ${id} not found.`);
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          console.error('Error fetching activities:', error);
        });
    } else {
      console.error('Invalid or missing activity ID in route parameters.');
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    const parsedPictures = this.picturesInput
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    const updatedActivity: Activity = {
      ...this.activity,
      instrucciones: this.instructions,
      proposito: this.purpose,
      imagenes: parsedPictures,
    } as Activity;

    this.activityService.updateActivity(updatedActivity).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error updating activity:', err);
      }
    });
  }

  discard() {
    this.router.navigate(['/dashboard']);
  }
}
