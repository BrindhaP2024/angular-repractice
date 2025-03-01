import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  imports: [],
  template:`<p>This is the scoped styles</p>`,
  styles: `
     p{
      color:red;
      font-size:18;
   }
  `,
})
export class StylingComponent {

}
