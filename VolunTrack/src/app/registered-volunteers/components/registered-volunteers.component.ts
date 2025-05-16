import {Component, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Activity} from '../../dashboard/model/dashboard.entity';
import {ActivityDetailsService} from '../../activity-details/services/activity-details.service';
import {RegisteredVolunteersService} from '../services/registered-volunteers.service';  // importa el service
import {RegisteredVolunteersEntity} from '../model/registered-volunteers.entity';
import {NgIf, NgForOf} from '@angular/common';

@Component({
  selector: 'app-registered-volunteers',
  standalone: true,
  imports: [
    MatButton,
    MatIconModule,
    MatIconButton,
    MatTooltipModule,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './registered-volunteers.component.html',
  styleUrls: ['./registered-volunteers.component.css']
})
export class RegisteredVolunteersComponent implements OnInit {
  activity!: Activity;
  volunteers: RegisteredVolunteersEntity[] = [];

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityDetailsService,
    private regVolunteersService: RegisteredVolunteersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.activityService.getActivityById(+id).subscribe({
      next: activity => {
        this.activity = activity;
        this.loadVolunteers(id);
      },
      error: err => {
        console.error('Error fetching activity:', err);
      }
    });
  }

  loadVolunteers(activityId: string) {
    this.regVolunteersService.getRegistrationsByActivity(activityId).subscribe({
      next: vols => this.volunteers = vols,
      error: err => console.error('Error loading volunteers:', err)
    });
  }
}
