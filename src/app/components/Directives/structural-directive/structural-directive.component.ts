import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from '../../custom-directive.directive';

@Component({
  selector: 'app-structural-directive',
  standalone: true, // Add standalone: true
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  isActive = true;
  isHighlighted = false;
  textColor = 'blue';
  fontSize = '20px';
  username = '';
  defaultColor: string = 'red';
  hoverColor: string = 'pink';

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }
}
