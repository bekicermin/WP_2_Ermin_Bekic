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
    localStorage.setItem('study', this.study.toString());
    this.savedStudy = this.study;
    this.study = 0;
  }
}
