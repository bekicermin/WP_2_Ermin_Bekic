import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrackersComponent } from './my-trackers.component';

describe('MyTrackersComponent', () => {
  let component: MyTrackersComponent;
  let fixture: ComponentFixture<MyTrackersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTrackersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
