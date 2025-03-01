import { Component, OnInit } from '@angular/core';

@Component({
  template: '' // No UI, just acts as a base class
})
export class BaseComponent implements OnInit {
  title: string = 'Default Title';

  constructor() {
    console.log('BaseComponent: Constructor');
  }

  ngOnInit() {
    console.log(`BaseComponent: Initialized with title: ${this.title}`);
  }

  logMessage(message: string) {
    console.log(`BaseComponent Log: ${message}`);
  }
}
