import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulate-styles',
  imports: [],
  templateUrl: './encapsulate-styles.component.html',
  styles: `p{
    color:red;
  }`,
  encapsulation:ViewEncapsulation.None,
})
export class EncapsulateStylesComponent {

}
