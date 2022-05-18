import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Forms } from '../models/Forms';

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
}
