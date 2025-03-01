import { Component, computed, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Score System</h3>
    <p><strong>Initial Score:</strong> {{ score() }}</p>
    <p><strong>Bonus Points:</strong> {{ bonusPoints() }}</p>
    <p><strong>Total Score:</strong> {{ totalScore() }}</p>

    <button (click)="increaseScore()">Increase Score</button>
  `
})
export class ScoreComponent {
  score = signal(10);
  bonusPoints = computed(() => this.score() * 2);
  totalScore = linkedSignal(() => this.score() + this.bonusPoints());

  increaseScore() {
    this.score.set(this.score() + 5);
  }
}
