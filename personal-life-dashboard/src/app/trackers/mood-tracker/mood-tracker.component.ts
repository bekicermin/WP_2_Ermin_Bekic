import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mood-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent {

  mood: number = 0;
  savedMood: number = 0;

  ngOnInit() {
    const data = localStorage.getItem('mood');
    if (data) {
      this.savedMood = Number(data);
    }
  }

  saveMood() {
    const previous = localStorage.getItem('mood');
    let total = this.mood;

    if (previous !== null) {
      total = Number(previous) + this.mood;
    }

    localStorage.setItem('mood', total.toString());
    this.savedMood = total;
    this.mood = 0;
  }
}