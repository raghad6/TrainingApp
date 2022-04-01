import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from "@angular/router";
// import { ConfirmedValidator } from '../../helpers/confirmed.validator';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})

export class ApplicationFormComponent implements OnInit {

  personal1Details!: FormGroup;
  personal2Details!: FormGroup;
  personal3Details!: FormGroup;
  personal1_step = false;
  personal2_step = false;
  personal3_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
        this.personal1Details = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            phone: ['', Validators.required],
            studentid: ['', Validators.required],
            email: ['', Validators.required],
            address: ['', Validators.required]
        });

        this.personal2Details = this.formBuilder.group({
          university: ['', Validators.required],
            // subphone: ['', Validators],
            corona: ['',Validators.required],
            feild: ['', Validators.required],
            daygrad: ['', Validators.required],
            avg: ['', Validators.required]
      });

        this.personal3Details = this.formBuilder.group({
            training: ['', Validators.required],
            available: ['', Validators.required],
            reqtraining: ['',Validators.required],
            request: ['', Validators.required]

        });
  }
  get personal1() { return this.personal1Details.controls; }
  get personal3() { return this.personal3Details.controls; }
  get personal2() { return this.personal2Details.controls; }
  next(){
    if(this.step==1){
          this.personal1_step = true;
          if (this.personal1Details.invalid) { return  }
          this.step++
    }
    if(this.step==2){
        this.personal2_step = true;
        if (this.personal2Details.invalid) { return }
            this.step++;
    }
  }
  previous(){
    this.step--
    if(this.step==1){
      this.personal1_step = false;
    }
    if(this.step==2){
      this.personal3_step = false;
    }
  }
  submit(){
    if(this.step==3){
      this.personal3_step = true;
      if (this.personal3Details.invalid) { return }
    }
  }
}
