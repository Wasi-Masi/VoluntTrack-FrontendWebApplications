import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ActivityDetailsService } from '../services/activity-details.service';
import { Activity } from '../../dashboard/model/dashboard.entity';
import {NgForOf, NgIf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  imports: [
    NgForOf,
    MatIconModule,
    MatButton,
    MatIconButton,
    NgIf,
    RouterLink,
    MatTooltipModule
  ],
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  activity!: Activity;
  selectedImage: string = '';
  currentIndex: number = 0;


  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.activityService.getActivityById(id).subscribe(activity => {
      this.activity = activity;
      this.selectedImage = activity.pictures?.[0] || ''; // ✅ Usamos el primer elemento del array
    });
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

}
