import { CommonModule } from '@angular/common';
import {
  Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';
@Component({
  selector: 'app-lifecycles',
  imports: [CommonModule],
  templateUrl: './lifecycles.component.html',
  styleUrl: './lifecycles.component.css'
})
export class LifecyclesComponent implements OnInit {
 @Input() userId!: number;

  userData: any;
  intervalId: any;
  constructor() {
    console.log('constructor is created here!');
  }
  ngOnInit(): void {
    console.log('ngOninit:componet need to get Initialized');
    this.fetchUserData();
  }
  ngOnchanges(changes: SimpleChanges): void {
    console.log("ngOnchanges:Whenever the inpt changes", changes);
    if (changes['userId']) {
      this.fetchUserData();
    }

  }

  ngDoCheck(): void {
    console.log('change detection cycle');

  }
  ngAfterContentInit(): void {
    console.log("Project content");
  }
  ngAfterContentChecked(): void {
    console.log("After content projected");

  }
  ngAfterViewInit(): void {
    console.log("VIew initialized");

  }
 ngAfterViewChecked():void{
  console.log('ngVIewAfterCHecked:view checked');
 }
 fetchUserData():void {

  console.log(`fetch user data:${this.userData} `);
  setTimeout(() =>{
    this.userData = {
      id:this.userId,
      name:'Brin',
      email:'brindha@gmail.com'
    };
    console.log('userData loaded',this.userData)
  },1000);

}
ngOnDestroy():void{
  console.log('Component got destroyed in this stage');
  clearInterval(this.intervalId);
}

}



