import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToDoListComponent } from './create-to-do-list.component';

describe('CreateToDoListComponent', () => {
  let component: CreateToDoListComponent;
  let fixture: ComponentFixture<CreateToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
