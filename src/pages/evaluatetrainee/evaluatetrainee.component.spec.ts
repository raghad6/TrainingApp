import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatetraineeComponent } from './evaluatetrainee.component';

describe('EvaluatetraineeComponent', () => {
  let component: EvaluatetraineeComponent;
  let fixture: ComponentFixture<EvaluatetraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatetraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatetraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
