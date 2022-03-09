import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CreateToDoListComponent } from './create-to-do-list/create-to-do-list.component';
import { EvaluatetraineeComponent } from './evaluatetrainee/evaluatetrainee.component';
import { EvaluationscreenComponent } from './evaluationscreen/evaluationscreen.component';
import { FinishedtraineesComponent } from './finishedtrainees/finishedtrainees.component';
import { FirstOpenComponent } from './first-open/first-open.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TraineeAccessScreenComponent } from './trainee-access-screen/trainee-access-screen.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TraineeReportComponent } from './trainee-report/trainee-report.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { TrainertraineesComponent } from './trainertrainees/trainertrainees.component';
import { UniProfileComponent } from './uni-profile/uni-profile.component';
import { UniTraineesListComponent } from './uni-trainees-list/uni-trainees-list.component';
 
const routes: Routes = [
  { path: '', component: FirstOpenComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Log In' } },
  { path: 'SignUp', component: SignupComponent, data: { title: 'Sign Up' } },
  { path: 'Create-todolist', component: CreateToDoListComponent, data: { title: 'Create To Do List' } },
  { path: 'ToDolist', component: ToDoListComponent, data: { title: 'To Do List' } },
  { path: 'Trainee-Access', component: TraineeAccessScreenComponent, data: { title: 'Trainees List' } },
  { path: 'Trainee-profile', component: TraineeProfileComponent, data: { title: ' My Profile' } },
  { path: 'Trainer-profile', component: TrainerProfileComponent, data: { title: 'My Profile' } },
  { path: 'Uni-profile', component: UniProfileComponent, data: { title: 'My Profile' } },
  { path: 'Uni-trainees', component: UniTraineesListComponent, data: { title: 'Trainees List' } },
  { path: 'Trainee-report', component: TraineeReportComponent, data: { title: 'Trainee Report' } },
  { path: 'Application-Form', component: ApplicationFormComponent, data: { title: 'In' } },
  { path: 'trainertrainees', component: TrainertraineesComponent, data: { title: 'In' } },
  { path: 'finishedtrainees', component: FinishedtraineesComponent, data: { title: 'In' } },
  { path: 'evaluatetrainee', component: EvaluatetraineeComponent, data: { title: 'In' } },
  { path: 'evaluationscreen', component: EvaluationscreenComponent, data: { title: 'In' } },
  { path: 'certificate', component: CertificateComponent, data: { title: 'In' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
