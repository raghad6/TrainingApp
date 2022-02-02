import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { UniProfileComponent } from './uni-profile/uni-profile.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TraineeHoursCal } from './trainee-hours-cal./trainee-hours-cal..component';
import { CreateToDoListComponent } from './create-to-do-list/create-to-do-list.component';
import { UniTraineesListComponent } from './uni-trainees-list/uni-trainees-list.component';
import { TraineeAccessScreenComponent } from './trainee-access-screen/trainee-access-screen.component';
import { TrianeeFinishedT } from './trianee-finished-t.h/trianee-finished-t.h.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TraineeProfileComponent,
    TrainerProfileComponent,
    UniProfileComponent,
    ToDoListComponent,
    TraineeHoursCal.Component,
    CreateToDoListComponent,
    UniTraineesListComponent,
    TraineeAccessScreenComponent,
    TrianeeFinishedT.HComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
