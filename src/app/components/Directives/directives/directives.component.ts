import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor,NgSwitch],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DIrectivesComponent {
   showContent = false;
list: any;
i: any;
item: any;
// list: any;
   toggleContent():void{
    this.showContent = !this.showContent;
   }
   items = [
    {id:0,name:'MEAN Stack'},
    {id:1,name:'MERN Stack'},
    {id:2,name:'Java Full Stack'}
   ];
   trackByFn(index:number,item:any):number{
    return item.id;
   }
   selectedTemplate = 'template1';

   selectTemplate(template: string): void {
     this.selectedTemplate = template;
   }
}
