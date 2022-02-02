import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeProfileComponent } from './trainee-profile.component';

describe('TraineeProfileComponent', () => {
  let component: TraineeProfileComponent;
  let fixture: ComponentFixture<TraineeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
