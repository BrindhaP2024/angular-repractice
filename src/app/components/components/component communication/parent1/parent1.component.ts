import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  imports: [Child1Component]
})
export class Parent1Component implements AfterViewInit {
  @ViewChild(Child1Component) child1!: Child1Component; // Accessing single child
  @ViewChildren(Child1Component) children!: QueryList<Child1Component>; // Accessing multiple children

  childMessage = '';

  ngAfterViewInit() {
    console.log("ViewChild - Single Child1 Message:", this.child1.showMessage());

    this.children.forEach((child, index) => {
      console.log(`ViewChildren - Child ${index + 1} Message:`, child.showMessage());
    });
  }

  getChildMessages() {
    this.childMessage = this.child1.showMessage();
  }
}
