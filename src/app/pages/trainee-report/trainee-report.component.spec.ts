import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeReportComponent } from './trainee-report.component';

describe('TraineeReportComponent', () => {
  let component: TraineeReportComponent;
  let fixture: ComponentFixture<TraineeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
