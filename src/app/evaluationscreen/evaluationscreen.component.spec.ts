import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationscreenComponent } from './evaluationscreen.component';

describe('EvaluationscreenComponent', () => {
  let component: EvaluationscreenComponent;
  let fixture: ComponentFixture<EvaluationscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
