import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOpenComponent } from './first-open.component';

describe('FirstOpenComponent', () => {
  let component: FirstOpenComponent;
  let fixture: ComponentFixture<FirstOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
