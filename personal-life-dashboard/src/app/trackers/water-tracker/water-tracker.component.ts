import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-water-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './water-tracker.component.html',
  styleUrls: ['./water-tracker.component.css']
})
export class WaterTrackerComponent {

  water: number = 0;
  savedWater: number = 0;

  ngOnInit() {
    const saved = localStorage.getItem('water');
    if (saved !== null) {
      this.savedWater = Number(saved);
    }
  }

  saveWater() {
    const previous = localStorage.getItem('water');
    let total = this.water;

    if (previous !== null) {
      total = Number(previous) + this.water;
    }

    localStorage.setItem('water', total.toString());
    this.savedWater = total;
    this.water = 0;
  }

  resetWater() {
    localStorage.removeItem('water');
    this.savedWater = 0;
  }
}
