import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { DashboardEntity } from '../model/dashboard.entity';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    MatButton,
    NgForOf,
    MatIconModule
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities: DashboardEntity[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }
}
