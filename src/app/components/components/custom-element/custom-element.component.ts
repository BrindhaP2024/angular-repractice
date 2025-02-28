import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-element',  // Element Selector
  template: `<p>This is a custom element component.</p>`,
  styles: [`p { color: darkgreen; font-style: italic; }`]
})
export class CustomElementComponent { }
