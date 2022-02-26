import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor() { }
  
  //dummy data for test
  emails = ['test@email.com' , 'admin@email.com'];
  valid(email: string){
    return (this.emails.includes(email));
  }
}
