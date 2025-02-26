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
import { LifecyclesComponent } from "./components/lifecycles/lifecycles.component";
import { CommonModule } from '@angular/common';
import { BindingsComponent } from "./components/bindings/bindings.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, TdfFormComponent, RdfComponent, CommonModule, BindingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Angular-repractice';
  fromSub = null;

  showUserProfile: boolean = true;
  userId: number = 1;
  changeUser() {
    this.userId = this.userId === 1?2:1;
   }
   toggleUserProfile() {
    this.showUserProfile = !this.showUserProfile;

   }

  constructor(private SampleService:SampleService){
       this.SampleService.sub.subscribe(x => console.log('from the subscribe',x));


  }
}
