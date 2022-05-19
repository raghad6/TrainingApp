import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {

  email:any;
  psw:any;
  psw_repeat:any;
  // role:any=2;
  alert: boolean=false;
  Title = 'Sign Up';
  signup = new FormControl('vali');

  signupForm = new FormGroup({
    email: new FormControl(''),
    psw: new FormControl(''),
    psw_repeat: new FormControl(''),

  });
  formBuilder: any;


  constructor(private router: Router ,
    formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        psw: ['', Validators.required],
        psw_repeat: ['', Validators.required],

    });

    }

    get valida() { 
      return this.signupForm.controls; 
    }

    log(){
      console.log('email: ', this.email);
      console.log('psw: ', this.psw);
      console.log('psw_repeat: ', this.psw_repeat);
  
    }


    async appSignup(){
      console.log('email: ', this.email);
      console.log('psw: ', this.psw);
      console.log('psw_repeat: ', this.psw_repeat);

      if(this.email.includes('@') && this.email.length>=11 && ( /[a-zA-Z]/.test(this.psw)) && ( /[0-9]/.test(this.psw)) &&( /[a-zA-Z]/.test(this.psw_repeat)) && ( /[0-9]/.test(this.psw_repeat)) ){
        this.alert=false;

       console.log("This is valid ");
    // post req signup

    this.goToPage('login');



      }else{
        this.alert=true;
        console.log("this is not  valid email or password");
      }

    }





  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  submit(){
      if (this.signupForm.invalid) { return }
      else   this.router.navigate([`login`]);

    }

  }

