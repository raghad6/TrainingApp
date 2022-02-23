import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComminghoursComponent } from './comminghours.component';

describe('ComminghoursComponent', () => {
  let component: ComminghoursComponent;
  let fixture: ComponentFixture<ComminghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComminghoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComminghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
