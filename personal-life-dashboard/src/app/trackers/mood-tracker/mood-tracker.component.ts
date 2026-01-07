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
    localStorage.setItem('mood', this.mood.toString());
    this.savedMood = this.mood;
    this.mood = 0;
  }
}
