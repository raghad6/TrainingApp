import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniTraineesListComponent } from './uni-trainees-list.component';

describe('UniTraineesListComponent', () => {
  let component: UniTraineesListComponent;
  let fixture: ComponentFixture<UniTraineesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniTraineesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniTraineesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
