import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../models/Forms';
import { User } from '../models/user';
import { Trainer } from '../models/Trainer';
import { Trainee } from '../models/Trainee';
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
        headers: headers,
      }
    );
  }

  postSignUpData(user: User): Observable<any> {
    const headers = new HttpHeaders();
    // headers.append('Content-Type', 'aaplicedForms');
    return this.httpClient.post(
      environment.api + 'signup',
      
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
    return this.httpClient.get<Trainee[]>(this.API + 'trainee');
  }
  
}

