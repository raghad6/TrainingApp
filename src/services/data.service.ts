import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forms } from 'src/app/Forms';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string = "http://localhost:3000/appform"; // to avoid CORS restrictions
  forms: Forms[] = [];

  constructor( private httpClient: HttpClient) { }

  getForms(): Observable<Forms[]>{
    return this.httpClient.get<Forms[]>(this.URL);
  }

  postForms(ID:number,fname: string, lname: string,PhoneNo: number,	Addres: string,
    Email: string,university:string , Field:string , ExpectedDOGrad:Date , TotalAvg:number
    ,TypeOfTraining:string,DaysAvailable:string , HoursAvailable:Time,ReqTrainingHours:number
    ,SupervisorPhoneNo:number,UniversityDoc:File){
      
      const headers = new HttpHeaders();
      headers.append("Content-Type","aaplicedForms");
      return this.httpClient.post(this.URL,{id:'',fname: fname, lname: lname,PhoneNo: PhoneNo,Addres: Addres,
      Email: Email,university:university , Field:Field , ExpectedDOGrad:ExpectedDOGrad , TotalAvg:TotalAvg
      ,TypeOfTraining:TypeOfTraining,DaysAvailable:DaysAvailable , HoursAvailable:HoursAvailable,
      ReqTrainingHours:ReqTrainingHours,SupervisorPhoneNo:SupervisorPhoneNo,UniversityDoc:UniversityDoc},
      {headers:headers})
      // .map((res: Response)=> res.text())
      .subscribe( (res: { toString: () => any; }) =>{
        console.log("test",res.toString());
      })
  }
  
}
