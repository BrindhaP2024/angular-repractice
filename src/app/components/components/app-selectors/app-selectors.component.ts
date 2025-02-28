import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective {
  @Input() appBox: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }
}
