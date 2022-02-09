import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoListComponent } from './create-to-do-list/create-to-do-list.component';
import { LoginPasswordCreationComponent } from './login-password-creation/login-password-creation.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TraineeAccessScreenComponent } from './trainee-access-screen/trainee-access-screen.component';
import { TraineeHoursCal } from './trainee-hours-cal./trainee-hours-cal..component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { UniProfileComponent } from './uni-profile/uni-profile.component';
import { UniTraineesListComponent } from './uni-trainees-list/uni-trainees-list.component';

const routes: Routes = [
  { path :'login' , component: LoginComponent } , 
  { path: 'signup' , component: LoginPasswordCreationComponent},
  { path: 'Create-todolist' , component: CreateToDoListComponent},
  { path: 'ToDolist' , component: ToDoListComponent                },
  { path: 'Trainee-Access' , component: TraineeAccessScreenComponent},
  { path: 'Trainee-profile' , component: TraineeProfileComponent},
  { path: 'Trainer-profile' , component: TrainerProfileComponent},
  { path: 'Trainee-Hours' , component: TraineeHoursCal},
  { path: 'Uni-profile' , component: UniProfileComponent},
  { path: 'Uni-trainees' , component: UniTraineesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
