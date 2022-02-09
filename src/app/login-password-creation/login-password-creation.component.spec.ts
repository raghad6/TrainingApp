import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordCreationComponent } from './login-password-creation.component';

describe('LoginPasswordCreationComponent', () => {
  let component: LoginPasswordCreationComponent;
  let fixture: ComponentFixture<LoginPasswordCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPasswordCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPasswordCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
