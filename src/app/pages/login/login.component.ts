import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Users: User[] = [];
  Title = 'Log In';
  login = new FormControl('vali');

  loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });
  formBuilder: any;

  constructor(private router: Router, formBuilder: FormBuilder) {
    // dataService.getUserFromServer().subscribe(
    //   (data: User[] )=> {
    //     this.Users = data;
    //     console.log(data);
    //   }
    // )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }

  get valida() {
    return this.loginForm.controls;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
  }
}
