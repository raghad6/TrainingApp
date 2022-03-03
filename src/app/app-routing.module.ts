import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoListComponent } from './create-to-do-list/create-to-do-list.component';
import { EvaluatetraineeComponent } from './evaluatetrainee/evaluatetrainee.component';
import { EvaluationScreenComponent } from './evaluation-screen/evaluation-screen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TraineeAccessScreenComponent } from './trainee-access-screen/trainee-access-screen.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TraineeReportComponent } from './trainee-report/trainee-report.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { UniProfileComponent } from './uni-profile/uni-profile.component';
import { UniTraineesListComponent } from './uni-trainees-list/uni-trainees-list.component';

const routes: Routes = [
  { path :'login' , component: LoginComponent } ,
  { path :'SignUp' , component: SignupComponent } ,  
  { path: 'Create-todolist' , component: CreateToDoListComponent},
  { path: 'ToDolist' , component: ToDoListComponent                },
  { path: 'Trainee-Access' , component: TraineeAccessScreenComponent},
  { path: 'Trainee-profile' , component: TraineeProfileComponent},
  { path: 'Trainer-profile' , component: TrainerProfileComponent},
  { path: 'Uni-profile' , component: UniProfileComponent},
  { path: 'Uni-trainees' , component: UniTraineesListComponent},
  { path :'Trainee-report' , component: TraineeReportComponent } ,
  { path :'evaluatetrainee' , component: EvaluatetraineeComponent } ,
  { path :'evaluationscreen' , component: EvaluationScreenComponent } ,



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
