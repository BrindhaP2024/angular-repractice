import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PostListComponent } from './components/post-list/post-list.component';
// import { SampleObsSubjectComponent } from "./components/sample-obs-subject/sample-obs-subject.component";
import { SampleService } from './services/sample.service';
import { RxjsCreationComponent } from "./components/app-rxjs-creation/app-rxjs-creation.component";
import { ProductComponent } from "./components/product/product.component";
import { RouterOutlet } from '@angular/router';
import { TdfFormComponent } from "./components/forms/tdf-form/tdf-form.component";
import { RdfComponent } from "./components/forms/rdf/rdf.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ProductComponent, RouterOutlet, TdfFormComponent, RdfComponent,RxjsCreationComponent],
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
