import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification">
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .notification {
      background:rgb(93, 203, 211);
      color: white;
      padding: 15px;
      margin: 10px;
      border-radius: 5px;
      width: 350px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
      animation: fadeIn 0.5s ease-out, fadeOut 0.5s ease-in 2.5s;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
  `]
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() message = '';

  ngOnInit() {
    console.log('Notification Created:', this.message);
  }

  ngOnDestroy() {
    console.log('Notification Destroyed:', this.message);
  }
}
