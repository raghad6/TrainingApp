import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { CreateToDoListComponent } from './pages/create-to-do-list/create-to-do-list.component';
import { EvaluatetraineeComponent } from './pages/evaluatetrainee/evaluatetrainee.component';
import { EvaluationscreenComponent } from './pages/evaluationscreen/evaluationscreen.component';
import { FinishedtraineesComponent } from './pages/finishedtrainees/finishedtrainees.component';
import { FirstOpenComponent } from './pages/first-open/first-open.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { TraineeAccessScreenComponent } from './pages/trainee-access-screen/trainee-access-screen.component';
import { TraineeProfileComponent } from './pages/trainee-profile/trainee-profile.component';
import { TraineeReportComponent } from './pages/trainee-report/trainee-report.component';
import { TrainerProfileComponent } from './pages/trainer-profile/trainer-profile.component';
import { TrainertraineesComponent } from './pages/trainertrainees/trainertrainees.component';
import { UniProfileComponent } from './pages/uni-profile/uni-profile.component';
import { UniTraineesListComponent } from './pages/uni-trainees-list/uni-trainees-list.component';

const routes: Routes = [
  { path: '', component: FirstOpenComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Log In' } },
  { path: 'SignUp', component: SignUpComponent, data: { title: 'Sign Up' } },
  {
    path: 'Create-todolist',
    component: CreateToDoListComponent,
    data: { title: 'Task List' },
  },
  {
    path: 'ToDolist',
    component: ToDoListComponent,
    data: { title: 'Task List' },
  },
  {
    path: 'Trainee-Access',
    component: TraineeAccessScreenComponent,
    data: { title: 'Trainees List' },
  },
  {
    path: 'Trainee-profile',
    component: TraineeProfileComponent,
    data: { title: ' My Profile' },
  },
  {
    path: 'Trainer-profile',
    component: TrainerProfileComponent,
    data: { title: 'My Profile' },
  },
  {
    path: 'Uni-profile',
    component: UniProfileComponent,
    data: { title: 'My Profile' },
  },
  {
    path: 'Uni-trainees',
    component: UniTraineesListComponent,
    data: { title: 'Trainees List' },
  },
  {
    path: 'Trainee-report',
    component: TraineeReportComponent,
    data: { title: 'Trainee Report' },
  },
  {
    path: 'Application-Form',
    component: ApplicationFormComponent,
    data: { title: 'In' },
  },
  {
    path: 'trainertrainees',
    component: TrainertraineesComponent,
    data: { title: 'In' },
  },
  {
    path: 'finishedtrainees',
    component: FinishedtraineesComponent,
    data: { title: 'In' },
  },
  {
    path: 'evaluatetrainee',
    component: EvaluatetraineeComponent,
    data: { title: 'In' },
  },
  {
    path: 'evaluationscreen',
    component: EvaluationscreenComponent,
    data: { title: 'In' },
  },
  {
    path: 'certificate',
    component: CertificateComponent,
    data: { title: 'In' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
