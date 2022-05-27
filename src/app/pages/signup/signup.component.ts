import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  Email: any;
  Password: any;
  Password_repeat: any;
  // role:any=2;
  alert: boolean = false;
  alert2: boolean = false;
  Title = 'Sign Up';
  signup = new FormControl('vali');
  // user: User[] = [];

  signupForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
    Password_repeat: new FormControl(''),
  });
  formBuilder: any;

  constructor(
    private router: Router,
    formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Password_repeat: ['', Validators.required],
    });
  }

  addSignUpData(user: User) {
    this.apiService.postSignUpNewData(user).subscribe((res) => {
      console.log(res, 'jkdhfjh');
    });
  }

  get valida() {
    return this.signupForm.controls;
  }

  log() {
    console.log('Email: ', this.Email);
    console.log('Password: ', this.Password);
    console.log('Password_repeat: ', this.Password_repeat);
  }

  async appSignup() {
    // console.log(this.signupForm['Email'].value);
    
    console.log('Email: ', this.Email);
    console.log('Password: ', this.Password);
    console.log('Password_repeat: ', this.Password_repeat);
    let us=new User(0,'', this.Password,this.Email);

 this.apiService.postSignUpNewData(us).subscribe((res) => {
      console.log(res, 'jkdhfjh');
    });
    //   if(this.Email.includes('@') && this.Email.length>=11 && ( /[a-zA-Z]/.test(this.Password)) && ( /[0-9]/.test(this.Password)) &&( /[a-zA-Z]/.test(this.Password_repeat)) && ( /[0-9]/.test(this.Password_repeat)) ){
    //     this.alert=false;

    //    console.log("This is valid ");
    // // post req signup

    // this.goToPage('login');
    //   }else{
    //     this.alert=true;
    //     console.log("this is not  valid Email or password");
    //   }
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  submit() {
    if (this.signupForm.invalid) {
      return;
    } else this.router.navigate([`login`]);

    this.addSignUpData( 
      new User
      (1,
      this.signupForm.controls['Email'].value,
      this.signupForm.controls['Email'].value,
      this.signupForm.controls['Password'].value,

    ));
  }
}
