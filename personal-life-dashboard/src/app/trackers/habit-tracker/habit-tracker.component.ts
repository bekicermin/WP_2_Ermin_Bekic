import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.css']
})
export class HabitTrackerComponent {

  habit: number = 0;
  savedHabit: number = 0;

  ngOnInit() {
    const saved = localStorage.getItem('habit');
    if (saved !== null) {
      this.savedHabit = Number(saved);
    }
  }

  saveHabit() {
    const previous = localStorage.getItem('habit');
    let total = this.habit;

    if (previous !== null) {
      total = Number(previous) + this.habit;
    }

    localStorage.setItem('habit', total.toString());
    this.savedHabit = total;
    this.habit = 0;
  }

  resetHabit() {
    localStorage.removeItem('habit');
    this.savedHabit = 0;
  }

}
