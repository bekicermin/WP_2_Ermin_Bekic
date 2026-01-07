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
    const data = localStorage.getItem('water');
    if (data) {
      this.savedWater = Number(data);
    }
  }

  saveWater() {
    localStorage.setItem('water', this.water.toString());
    this.savedWater = this.water;
    this.water = 0;
  }
}
