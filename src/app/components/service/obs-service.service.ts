import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  private messageSource = new BehaviorSubject<string>('Default Message from Service');
  currentMessage = this.messageSource.asObservable();

  updateMessage(newMessage: string) {
    this.messageSource.next(newMessage);
  }
}
