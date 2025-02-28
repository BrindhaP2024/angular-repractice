import { Component, ContentChild, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements AfterContentInit {
  @ContentChild('singleContent') singleContent!: ElementRef; // Accessing single projected content
  @ContentChildren('.multiple', { descendants: true }) multipleContents!: QueryList<ElementRef>; // Accessing multiple projected contents

  showMessage() {
    return "Hello from Child1!";
  }

  ngAfterContentInit() {
    console.log("ContentChild - Single Content:", this.singleContent?.nativeElement.textContent);

    this.multipleContents.forEach((element, index) => {
      console.log(`ContentChildren - Multiple Content ${index + 1}:`, element.nativeElement.textContent);
    });
  }
}
