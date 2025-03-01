import { CommonModule } from '@angular/common';
import { Component, Input, signal, effect, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>User Info</h3>
    <p *ngIf="isLoading()">Loading user data...</p>
    <p *ngIf="user()">
      <strong>User:</strong> {{ user()?.name }} <br>
      <strong>Email:</strong> {{ user()?.email }}
    </p>
  `,
})
export class UserComponent implements OnChanges {
  @Input() userId!: string; // Receive userId from parent

  user = signal<any | null>(null);
  isLoading = signal(false);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId']) {
      this.fetchUserData();
    }
  }

  async fetchUserData() {
    if (!this.userId) return;

    this.isLoading.set(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      this.user.set(await response.json());
    } catch (error) {
      console.error('Error fetching user:', error);
      this.user.set(null);
    } finally {
      this.isLoading.set(false);
    }
  }
}
