import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message to Parent</button>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from Child!");
  }
}
