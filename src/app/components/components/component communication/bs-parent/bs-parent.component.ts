import { Component, OnInit } from '@angular/core';
import { ObsService } from '../../../service/obs-service.service';
import { BsChildComponent } from "../bs-child/bs-child.component";

@Component({
  selector: 'app-bs-parent',
  templateUrl: './bs-parent.component.html',
  imports: [BsChildComponent]
})
export class BsParentComponent implements OnInit {
  parentMessage = '';


  constructor(private obsService: ObsService) {}

  ngOnInit() {
    this.obsService.currentMessage.subscribe(message => {
      this.parentMessage = message;
    });
  }

  sendMessageToChild() {
    this.obsService.updateMessage('Message from Parent to Child');
  }
}
