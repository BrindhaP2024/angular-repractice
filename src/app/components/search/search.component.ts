import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchControl = new FormControl('');

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => this.searchEvent.emit(value ?? ''));
      // ensuring the value is not null ?? for the emitted value...
  }
}
