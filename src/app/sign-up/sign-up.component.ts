import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    pass1: new FormControl(''),
    pass2: new FormControl(''),

  });
  formBuilder: any;


  constructor(private router: Router ,
    formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],

  },
  {
    validator: ConfirmedValidator('pass1', 'pass2')
  }
  );
  }

  get valida() { return this.signupForm.controls; }

goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

submit(){
    if (this.signupForm.invalid) { return  }
    else   this.router.navigate([`login`]);

  }
}
