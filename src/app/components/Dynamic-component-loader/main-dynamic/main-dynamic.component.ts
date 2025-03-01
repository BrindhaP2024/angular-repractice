import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-main-dynamic',
  template: `
    <h2>Live News Notification</h2>
    <button (click)="addNotification()">Get Latest News</button>
    <ng-container #notificationContainer></ng-container>
  `,
  styles: [`
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    button {
      background:rgb(179, 47, 190);
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      margin-bottom: 10px;
      border-radius: 5px;
    }

    button:hover {
      background: #45a049;
    }
  `]
})
export class MainDynamicComponent {
  @ViewChild('notificationContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  notificationQueue: string[] = [
    "Breaking News: Stock Market Hits Record High!",
    "Sports: Local Team Wins Championship!",
    "Weather Update: Heavy Rain Expected Tomorrow!",
    "Tech: New Smartphone Released with AI Features!",
    "World News: Major Agreement Signed Between Nations!"
  ];

  addNotification() {
    if (this.notificationQueue.length > 0) {
      const message = this.notificationQueue.shift(); // Get the next message
      console.log('Adding notification:', message);

      if (message) {
        const componentRef = this.container.createComponent(NotificationComponent);
        componentRef.instance.message = message;

        setTimeout(() => {
          console.log('Removing notification:', message);
          componentRef.destroy();
        }, 5000);
      }
    } else {
      console.log('No more notifications in queue.');
    }
  }
}
