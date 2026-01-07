import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-study-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './study-tracker.component.html',
  styleUrls: ['./study-tracker.component.css']
})
export class StudyTrackerComponent {

  study: number = 0;
  savedStudy: number = 0;

  ngOnInit() {
    const data = localStorage.getItem('study');
    if (data) {
      this.savedStudy = Number(data);
    }
  }

  saveStudy() {
    const previous = localStorage.getItem('study');
    let total = this.study;

    if (previous !== null) {
      total = Number(previous) + this.study;
    }

    localStorage.setItem('study', total.toString());
    this.savedStudy = total;
    this.study = 0;
  }
}