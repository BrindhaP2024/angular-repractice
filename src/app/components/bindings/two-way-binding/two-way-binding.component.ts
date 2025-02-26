import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BindingsComponent } from '../bindings.component';


@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, BindingsComponent],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  name: string = ''; 

  dataFromParent: string = 'Initial data from Parent';

  updateData(newData: string) {
    this.dataFromParent = newData;
  }

}
