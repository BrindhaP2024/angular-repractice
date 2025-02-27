import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  text = 'Pipes Example';
  price = 140.0545;
  purchasedOn = '2025-01-29T12:00:00'; // A valid ISO string format for date
  discount = 0.2;
  users = [
    { name: 'Jack', age: 30, email: 'jack@yahoo.com' },
    { name: 'Saranya', age: 25, email: 'saranya@example.com' },
    { name: 'Saran', age: 35, email: 'saran@gmail.com' }
  ];
}
