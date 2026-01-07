import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sleep-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sleep-tracker.component.html',
  styleUrls: ['./sleep-tracker.component.css']
})
export class SleepTrackerComponent {

  sleep: number = 0;
  savedSleep: number = 0;

  ngOnInit() {
    const saved = localStorage.getItem('sleep');
    if (saved !== null) {
      this.savedSleep = Number(saved);
    }
  }

  saveSleep() {
    localStorage.setItem('sleep', this.sleep.toString());
    this.savedSleep = this.sleep;
    this.sleep = 0;
  }
}
