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
    const previous = localStorage.getItem('sleep');
    let total = this.sleep;

    if (previous !== null) {
      total = Number(previous) + this.sleep;
    }

    localStorage.setItem('sleep', total.toString());
    this.savedSleep = total;
    this.sleep = 0;
  }
}