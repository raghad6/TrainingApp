import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { UniProfileComponent } from './uni-profile/uni-profile.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CreateToDoListComponent } from './create-to-do-list/create-to-do-list.component';
import { UniTraineesListComponent } from './uni-trainees-list/uni-trainees-list.component';
import { TraineeAccessScreenComponent } from './trainee-access-screen/trainee-access-screen.component';
import { SignupComponent } from './signup/signup.component';
import { TraineeReportComponent } from './trainee-report/trainee-report.component';
import { ComminghoursComponent } from './comminghours/comminghours.component';
import { EvaluatetraineeComponent } from './evaluatetrainee/evaluatetrainee.component';
import { EvaluationScreenComponent } from './evaluation-screen/evaluation-screen.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TraineeProfileComponent,
    TrainerProfileComponent,
    UniProfileComponent,
    ToDoListComponent,
    CreateToDoListComponent,
    UniTraineesListComponent,
    TraineeAccessScreenComponent,
    SignupComponent,
    TraineeReportComponent,
    ComminghoursComponent,
    EvaluatetraineeComponent,
    EvaluationScreenComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
