import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Attribute Selector
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
    renderer.setStyle(el.nativeElement, 'padding', '5px');
  }
}
