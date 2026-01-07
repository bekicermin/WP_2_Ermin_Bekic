import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent {

  meals: number = 0;
  savedMeals: number = 0;

  ngOnInit() {
    const data = localStorage.getItem('meals');
    if (data) {
      this.savedMeals = Number(data);
    }
  }

  saveMeals() {
    const previous = localStorage.getItem('meals');
    let total = this.meals;

    if (previous !== null) {
      total = Number(previous) + this.meals;
    }

    localStorage.setItem('meals', total.toString());
    this.savedMeals = total;
    this.meals = 0;
  }
}