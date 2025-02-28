import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBox]'  // Attribute selector
})
export class BoxDirective implements OnInit {
  @Input() appBox: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
  }
}
