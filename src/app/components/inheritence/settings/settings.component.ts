import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-settings',
  template: `<h2>{{ title }}</h2><button (click)="logSettings()">Log Message</button>`
})
export class SettingsComponent extends BaseComponent {
  constructor() {
    super();
    this.title = 'Settings Page';
  }

  logSettings() {
    this.logMessage('Settings button clicked!');
  }
}
