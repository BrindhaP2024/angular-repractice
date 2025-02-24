import { Component, OnInit } from '@angular/core';
import {
  of, from, interval, timer, combineLatest, zip, merge, concat
} from 'rxjs';
import {
  filter, distinctUntilChanged, take, skip
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-creation',
  template: `<h2>Check console for Creation & Filtering operators</h2>`,
  styleUrls: ['./app-rxjs-creation.component.css']
})
export class RxjsCreationComponent implements OnInit {

  ngOnInit() {
    this.creationOperators();
    this.filteringOperators();
    this.combinationOperators();
  }

  /**Creation Operators */
  creationOperators() {
    console.log("Creation Operators");

    of(1, 2, 3).subscribe(val => console.log('of:', val));
    from([10, 20, 30]).subscribe(val => console.log('from:', val));

    interval(1000).pipe(take(3)).subscribe(val => console.log('interval:', val));
    timer(2000).subscribe(() => console.log('timer: Triggered after 2s'));
  }

  /**Filtering Operators */
  filteringOperators() {
    console.log("Filtering Operators");

    of(5, 10, 15, 20).pipe(
      filter(x => x > 10)
    ).subscribe(val => console.log('filter:', val));

    from([1, 2, 2, 3, 3, 4]).pipe(
      distinctUntilChanged()
    ).subscribe(val => console.log('distinctUntilChanged:', val));

    interval(500).pipe(
      take(5)
    ).subscribe(val => console.log('take:', val));

    interval(500).pipe(
      skip(3),
      take(3)
    ).subscribe(val => console.log('skip:', val));
  }

  /**Combination Operators */
  combinationOperators() {
    console.log("Combination Operators");

    const obs1 = of('Accessories', 'Designs', 'Catalog');
    const obs2 = of(1, 2, 3);

    combineLatest([obs1, obs2]).subscribe(val => console.log('combineLatest:', val));

    zip(obs1, obs2).subscribe(val => console.log('zip:', val));

    merge(obs1, obs2).subscribe(val => console.log('merge:', val));

    concat(obs1, obs2).subscribe(val => console.log('concat:', val));
  }
}
