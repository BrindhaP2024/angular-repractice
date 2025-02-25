import { SampleService } from './../../services/sample.service';
import { Component } from '@angular/core';
import { Observable,Subject,of } from 'rxjs';

@Component({
  selector: 'app-sample-obs-subject',
  imports: [],
  // templateUrl: './sample-obs-subject.component.html',
  template:`<button (click)="emit()">Emit check </button>`,
  styleUrl: './sample-obs-subject.component.css'
})
export class SampleObsSubjectComponent {
  constructor(private SampleService:SampleService){
  let obs = of(1,2,3);
  let observable:Observable<any> = of(1,2,3);
  observable.subscribe(x => console.log("from observables",x));

  let sub: Subject<any> = new Subject();
   sub.subscribe(x => console.log('from app subject'));
   sub.next('next to be');
   sub.next('go next');
   sub.complete();

  }
  emit(){
    this.SampleService.sendData(Math.random())
  }

}
