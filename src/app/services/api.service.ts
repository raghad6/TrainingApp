import { Trainee } from './../models/Trainee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../models/Forms';
import { User } from '../models/user';
import { Trainer } from '../models/Trainer';
import TasksList from '../models/TasksList';
import University from '../models/University';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API = environment.api;
  private readonly headers = {};
  

  constructor(private httpClient: HttpClient) {}

  getForms(): Observable<Forms[]> {
    return this.httpClient.get<Forms[]>(this.API + 'appform');
  }

  postForms(form: Forms): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'appform',
      {
        appform: form,
      },
      {
        // headers: headers,
      }
    );
  }

  postSignUpData(user: User): Observable<any> {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'signup',
      
         user
      ,
      // {
      //   headers
      // }
    );
  }

  postSignUpNewData(user: User): Observable<any> {
    const headers = new HttpHeaders();
    // headers.apapend('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'signupPass',

         user
      ,
      {
        headers
      }
    );
  }

  postLoginData(user: User): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'login',
         user
      ,
      {
        headers
      }
    );
  }

  getTrainerData(): Observable<Trainer[]> {
    return this.httpClient.get<Trainer[]>(this.API + 'trainer');
  }

  getTraineesList(): Observable<Trainee[]> {
    return this.httpClient.get<Trainee[]>(this.API + 'trainee');
  }

  getTraineesHoursDone(): Observable<Trainee[]> {
    // console.log(this.API+ 'trainee/'+id);
    return this.httpClient.get<Trainee[]>(this.API + 'trainee');
  }
  
  getUniData(): Observable<University[]> {
    return this.httpClient.get<University[]>(this.API + 'unitrainingsupervisor');
  }

  getUni1Data(id:string): Observable<University[]> {
    return this.httpClient.get<University[]>(this.API + 'unitrainingsupervisor/' + id);
  }

  getUni2Data(id:string): Observable<Trainee[]> {
    return this.httpClient.get<Trainee[]>(this.API + 'gettraineebysuper/' + id);
  }

  postTaskList(tasks: TasksList): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'tasklist',
      tasks
      ,
      {
        headers
      }
    );
  }
}

