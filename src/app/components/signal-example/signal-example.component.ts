// import { CommonModule } from '@angular/common';
// import { Component, effect, signal, computed, linkedSignal, resource } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-signal-example',
//   standalone: true,
//   template: `
//     <h2>Signal Example Dashboard</h2>

//     <!-- Input to Change User ID -->
//     <input [(ngModel)]="userId" placeholder="Enter User ID" />

//     <!-- Display User Info -->
//     <p *ngIf="userResource.isLoading()">Loading user data...</p>
//     <p *ngIf="userResource()">
//       <strong>User:</strong> {{ userResource()?.name }} <br>
//       <strong>Email:</strong> {{ userResource()?.email }}
//     </p>

//     <!-- Computed and Linked Signals -->
//     <p><strong>Initial Score:</strong> {{ score() }}</p>
//     <p><strong>Bonus Points (Computed):</strong> {{ bonusPoints() }}</p>
//     <p><strong>Total Score (Linked):</strong> {{ totalScore() }}</p>

//     <!-- Actions -->
//     <button (click)="increaseScore()">Increase Score</button>
//   `,
//   imports: [CommonModule, FormsModule],
// })
// export class SignalExampleComponent {
//   // Reactive State
//   userId = signal('1'); // Default User ID
//   score = signal(10);   // Initial score

//   // Computed Signal (bonus points = double the score)
//   bonusPoints = computed(() => this.score() * 2);

//   // Linked Signal (total score = score + bonus points)
//   totalScore = linkedSignal([this.score, this.bonusPoints], () =>
//     this.score() + this.bonusPoints()
//   );

//   // Async Resource - Fetch user data from API
//   userResource = resource<string, any>(
//     this.userId,
//     async (id: string) => {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//       return response.json();
//     }
//   );

//   constructor() {
//     // Effect: Logs score updates
//     effect(() => {
//       console.log(`New Score: ${this.score()}`);
//     });

//     // Effect: Logs when user data is loaded
//     effect(() => {
//       if (this.userResource()) {
//         console.log(`User Loaded: ${this.userResource()?.name}`);
//       }
//     });
//   }

//   // Update Score
//   increaseScore() {
//     this.score.update((value) => value + 5);
//   }
// }
