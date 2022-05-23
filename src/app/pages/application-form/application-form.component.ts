import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Forms } from 'src/app/models/Forms';
import { Time } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})
export class ApplicationFormComponent implements OnInit {
  email:any;
  alertEmail: boolean=false;
  personal1Details!: FormGroup;
  personal2Details!: FormGroup;
  personal3Details!: FormGroup;
  personal1_step = false;
  personal2_step = false;
  personal3_step = false;
  step = 1;
  forms: Forms[] = [];
  currentTime: Time = {
    hours: 5,
    minutes: 10,
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.apiService.getForms().subscribe((data: Forms[]) => {
      this.forms = data;
      console.log(data);
    });
  }

  addForms(form: Forms) {
    this.apiService.postForms(form).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
    // this.dataService.post().subscribe(  );
    this.personal1Details = this.formBuilder.group({
      FName: ['', Validators.required],
      LName: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      StudentID: ['', Validators.required],
      Email: ['', Validators.required],
      Addres: ['', Validators.required],
    });

    this.personal2Details = this.formBuilder.group({
      university: ['', Validators.required],
      SupervisorPhoneNo: ['', Validators.required],
      // Emailsup: ['', Validators.required],
      Emailsup: ['', Validators.required],
      Field: ['', Validators.required],
      ExpectedDOGrad: ['', Validators.required],
      TotalAvg: ['', Validators.required],
    });

    this.personal3Details = this.formBuilder.group({
      TypeOfTraining: ['', Validators.required],
      DaysAvailable: [''], // TODO: Validators.required
      ReqTrainingHours: ['', Validators.required],
      UniversityDoc: ['', Validators.required],
    });
  }

  get personal1() {
    return this.personal1Details.controls;
  }
  get personal3() {
    return this.personal3Details.controls;
  }
  get personal2() {
    return this.personal2Details.controls;
  }
  next() {
    if (this.step == 1) {
      this.personal1_step = true;
      if(this.email.includes('@')  && this.email.length>=11){
        // this.step++;
return;
      }else{
        this.alertEmail=true;

      }
      if (this.personal1Details.invalid) {
        
        return;
      }
      
      this.step++;
    }
    if (this.step == 2) {
      this.personal2_step = true;
      if (this.personal2Details.invalid) {
        return;
      }
      this.step++;
    }
  }
  previous() {
    this.step--;
    if (this.step == 1) {
      this.personal1_step = false;
    }
    if (this.step == 2) {
      this.personal3_step = false;
    }
  }
  submit() {
    if (this.step == 3) {
      this.personal3_step = true;
      if (this.personal3Details.invalid) {
        return;
      }

      this.addForms(
        new Forms(
          1,
          this.personal1Details.controls['FName'].value,
          this.personal1Details.controls['LName'].value,
          this.personal1Details.controls['PhoneNo'].value,
          this.personal1Details.controls['StudentID'].value,
          this.personal1Details.controls['Addres'].value,
          this.personal1Details.controls['Email'].value,
          this.personal2Details.controls['university'].value,
          this.personal2Details.controls['Field'].value,
          this.personal2Details.controls['ExpectedDOGrad'].value,
          this.personal2Details.controls['TotalAvg'].value,
          this.personal3Details.controls['TypeOfTraining'].value,
          this.personal3Details.controls['DaysAvailable'].value,
          this.personal3Details.controls['DaysAvailable'].value, // Hours available
          this.personal3Details.controls['ReqTrainingHours'].value,
          this.personal2Details.controls['SupervisorPhoneNo'].value,
          this.personal3Details.controls['UniversityDoc'].value,
          this.personal2Details.controls['Emailsup'].value,
          // this.personal2Details.controls['Emailsup'].value

        )
      );
    }
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
} 
