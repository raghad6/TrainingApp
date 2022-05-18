import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedtraineesComponent } from './finishedtrainees.component';

describe('FinishedtraineesComponent', () => {
  let component: FinishedtraineesComponent;
  let fixture: ComponentFixture<FinishedtraineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedtraineesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedtraineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
