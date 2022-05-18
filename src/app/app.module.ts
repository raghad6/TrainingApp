import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { TraineeProfileComponent } from '../pages/trainee-profile/trainee-profile.component';
import { TrainerProfileComponent } from '../pages/trainer-profile/trainer-profile.component';
import { UniProfileComponent } from '../pages/uni-profile/uni-profile.component';
import { ToDoListComponent } from '../pages/to-do-list/to-do-list.component';
import { CreateToDoListComponent } from '../pages/create-to-do-list/create-to-do-list.component';
import { UniTraineesListComponent } from '../pages/uni-trainees-list/uni-trainees-list.component';
import { TraineeAccessScreenComponent } from '../pages/trainee-access-screen/trainee-access-screen.component';
import { SignUpComponent } from '../pages/signup/signup.component';
import { TraineeReportComponent } from '../pages/trainee-report/trainee-report.component';
import { FirstOpenComponent } from '../pages/first-open/first-open.component';
import { ApplicationFormComponent } from '../pages/application-form/application-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from '../pages/header/header.component';
import { TrainertraineesComponent } from '../pages/trainertrainees/trainertrainees.component';
import { FinishedtraineesComponent } from '../pages/finishedtrainees/finishedtrainees.component';
import { EvaluationscreenComponent } from '../pages/evaluationscreen/evaluationscreen.component';
import { EvaluatetraineeComponent } from '../pages/evaluatetrainee/evaluatetrainee.component';
import { CertificateComponent } from '../pages/certificate/certificate.component';
import { FooterComponent } from '../pages/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TraineeProfileComponent,
    TrainerProfileComponent,
    ToDoListComponent,
    CreateToDoListComponent,
    UniTraineesListComponent,
    TraineeAccessScreenComponent,
    SignUpComponent,
    TraineeReportComponent,
    FirstOpenComponent,
    HeaderComponent,
    ApplicationFormComponent,
    TrainertraineesComponent,
    FinishedtraineesComponent,
    EvaluationscreenComponent,
    EvaluatetraineeComponent,
    CertificateComponent,
    FooterComponent,
    UniProfileComponent
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
