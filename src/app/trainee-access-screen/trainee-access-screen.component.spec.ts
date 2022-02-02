import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeAccessScreenComponent } from './trainee-access-screen.component';

describe('TraineeAccessScreenComponent', () => {
  let component: TraineeAccessScreenComponent;
  let fixture: ComponentFixture<TraineeAccessScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeAccessScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeAccessScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
