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

  habit: string = '';
  savedHabit: string = '';

  ngOnInit() {
    const data = localStorage.getItem('habit');
    if (data) {
      this.savedHabit = data;
    }
  }

  saveHabit() {
    localStorage.setItem('habit', this.habit);
    this.savedHabit = this.habit;
    this.habit = '';
  }
}
