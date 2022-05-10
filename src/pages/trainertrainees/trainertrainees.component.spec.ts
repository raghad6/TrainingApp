import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainertraineesComponent } from './trainertrainees.component';

describe('TrainertraineesComponent', () => {
  let component: TrainertraineesComponent;
  let fixture: ComponentFixture<TrainertraineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainertraineesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainertraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
