import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationScreenComponent } from './evaluation-screen.component';

describe('EvaluationScreenComponent', () => {
  let component: EvaluationScreenComponent;
  let fixture: ComponentFixture<EvaluationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
