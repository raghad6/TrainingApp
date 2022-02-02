import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniProfileComponent } from './uni-profile.component';

describe('UniProfileComponent', () => {
  let component: UniProfileComponent;
  let fixture: ComponentFixture<UniProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
