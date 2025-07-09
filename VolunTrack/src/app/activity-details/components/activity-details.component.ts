import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ActivityDetailsService } from '../services/activity-details.service';
import { Activity } from '../../dashboard/model/dashboard.entity';
import {NgForOf, NgIf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    MatButton,
    MatIconButton,
    NgIf,
    RouterLink,
    MatTooltipModule,
    TranslatePipe
  ],
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
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
    '',
    0,
    []
  );
  selectedImage: string = '';
  currentIndex: number = 0;


  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null && !isNaN(id)) {
      this.activityService.getActivityById(id).subscribe({
        next: activity => {
          this.activity = activity;
          this.selectedImage = activity.imagenes?.[0] || '';
        },
        error: err => {
          console.error('Error fetching activity:', err);
        }
      });
    } else {
      console.error('Invalid or missing activity ID in route parameters.');
    }
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
