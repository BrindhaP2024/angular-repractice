import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { SampleObsSubjectComponent } from "./components/sample-obs-subject/sample-obs-subject.component";
import { SampleService } from './services/sample.service';
import { sample } from 'rxjs';
import { Console } from 'console';
import { RxjsCreationComponent } from "./components/app-rxjs-creation/app-rxjs-creation.component";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RxjsCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-repractice';
  fromSub = null;
  constructor(private SampleService:SampleService){
       this.SampleService.sub.subscribe(x => console.log('from the subscribe',x));
}
}
