import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianeeFinishedT.HComponent } from './trianee-finished-t.h.component';

describe('TrianeeFinishedT.HComponent', () => {
  let component: TrianeeFinishedT.HComponent;
  let fixture: ComponentFixture<TrianeeFinishedT.HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrianeeFinishedT.HComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianeeFinishedT.HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
