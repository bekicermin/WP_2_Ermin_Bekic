import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTrackerComponent } from './study-tracker.component';

describe('StudyTrackerComponent', () => {
  let component: StudyTrackerComponent;
  let fixture: ComponentFixture<StudyTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
