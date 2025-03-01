import { Component } from '@angular/core';

@Component({
  selector: 'app-host-meta',
  template: `<p>Using host metadata</p>`,
  styles: [`
    :host {
      display: block;
      background: lightgray;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    :host.active {
      background: lightgreen;
    }
  `],
  host: {
    '[class.active]': 'isActive',
    '[style.border]': '"2px solid green"',
    '(click)': 'onClick()'
  }
})
export class HostMetaComponent {
  isActive = false;

  onClick() {
    this.isActive = !this.isActive;
    console.log('Host element clicked! Active state:', this.isActive);
  }
}
