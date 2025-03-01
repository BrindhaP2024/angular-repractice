import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-dashboard',
  template: `<h2>{{ title }}</h2><button (click)="logDashboard()">Log Message</button>`
})
export class DashboardComponent extends BaseComponent {
  override title: string;

  constructor() {
    super(); // Call parent constructor
    this.title = 'Dashboard Page';
  }

  logDashboard() {
    this.logMessage('Dashboard button clicked!');
  }

  override logMessage(message: string) {
    console.log(message); // Assuming BaseComponent has a logMessage method
  }
}
