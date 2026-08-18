import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>Project Dashboard</h2>
      <div *ngIf="stats">
        <p>Total Users: {{ stats.totalUsers }}</p>
        <p>Active Sessions: {{ stats.activeSessions }}</p>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getStats().subscribe(data => {
      this.stats = data;
    });
  }
}
