import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appWarning:not(button)'  // :not Selector
})
export class WarningDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'red');
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
  }
}
