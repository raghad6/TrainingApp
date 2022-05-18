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


  Title = 'Sign Up';
  signup = new FormControl('vali');

  signupForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });
  formBuilder: any;


  constructor(private router: Router ,
    formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        pass: ['', Validators.required],
    });

    }

    get valida() { return this.signupForm.controls; }



  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  submit(){
      if (this.signupForm.invalid) { return }
    }
    
  }
  
