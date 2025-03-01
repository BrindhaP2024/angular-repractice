import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-interactive-box',
  template: `<p>Hover & Click me!</p>`,
  styleUrls: ['./app-interactive-box.component.css']
})
export class InteractiveBoxComponent {

  @HostBinding('style.backgroundColor') backgroundColor = 'lightblue';

  @HostBinding('class.active') isActive = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightgreen';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('click') onClick() {
    this.isActive = !this.isActive;
    console.log('Box clicked! Active state:', this.isActive);
  }
}
