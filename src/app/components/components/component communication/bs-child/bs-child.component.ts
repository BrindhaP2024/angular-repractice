import { Component, OnInit } from '@angular/core';
import { ObsService } from '../../../service/obs-service.service';

@Component({
  selector: 'app-bs-child',
  templateUrl: './bs-child.component.html'
})
export class BsChildComponent implements OnInit {
  childMessage = '';

  constructor(private obsService: ObsService) {}

  ngOnInit() {
    this.obsService.currentMessage.subscribe(message => {
      this.childMessage = message;
    });
  }

  sendMessageToParent() {
    this.obsService.updateMessage('Message from Child to Parent');
  }
}
