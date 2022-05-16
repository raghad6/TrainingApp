import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';
import { Forms } from 'src/app/Forms';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string = "http://localhost:4200"; // to avoid CORS restrictions
  Users: User[] = [];
  forms: Forms[] = [];

  constructor( private httpClient: HttpClient) { }


  // getUsers(): User[]{
  //   return this.Users
  // }

  getForms(): Observable<Forms[]>{
    return this.httpClient.get<Forms[]>(this.URL);
  }
}
