import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from "@angular/router";
import { DataService } from '../../services/data.service';
import { Forms } from 'src/app/Forms';
import { Time } from '@angular/common';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
  providers:[DataService]
})
export class ApplicationFormComponent implements OnInit {

  personal1Details!: FormGroup;
  personal2Details!: FormGroup;
  personal3Details!: FormGroup;
  personal1_step = false;
  personal2_step = false;
  personal3_step = false;
  step = 1;
  forms: Forms[] = [];

  constructor(private formBuilder: FormBuilder,private router: Router,private dataService: DataService) {
         dataService.getForms().subscribe(
        (data: Forms[] )=> {
          this.forms = data;
          console.log(data);
        }
      )
      // dataService.postForms(this.forms[]).subscribe(
      //     (res) => {
      //       console.log(res);
      //     },
      //     (error) => {
      //       console.log(error)
      //     }
      //   )
   }

   addForms(ID:number,fname: string, lname: string,PhoneNo: number,	Addres: string,
    Email: string,university:string , Field:string , ExpectedDOGrad:Date , TotalAvg:number
    ,TypeOfTraining:string,DaysAvailable:string , HoursAvailable:Time , ReqTrainingHours:number
    ,SupervisorPhoneNo:number,UniversityDoc:File){

      if(this.dataService.postForms(ID,fname,lname,PhoneNo,Addres,
        Email,university,Field,ExpectedDOGrad,TotalAvg,TypeOfTraining,DaysAvailable,
        HoursAvailable, ReqTrainingHours,SupervisorPhoneNo,UniversityDoc)){
        console.log("Data inserted!")
      }
   }


  ngOnInit() {    // this.dataService.post().subscribe(  );
    this.personal1Details = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      studentid: ['', Validators.required],
      Email: ['', Validators.required],
      Addres: ['', Validators.required]
    });

    this.personal2Details = this.formBuilder.group({
      university: ['', Validators.required],
      SupervisorPhoneNo: ['', Validators.required],
      corona: ['', Validators.required],
      Field: ['', Validators.required],
      ExpectedDOGrad: ['', Validators.required],
      TotalAvg: ['', Validators.required]
    });

    this.personal3Details = this.formBuilder.group({
      TypeOfTraining: ['', Validators.required],
      DaysAvailable: ['', Validators.required],
      ReqTrainingHours: ['', Validators.required],
      UniversityDoc: ['', Validators.required]

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
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}