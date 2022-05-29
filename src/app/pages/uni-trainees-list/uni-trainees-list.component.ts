import { Trainee } from './../../models/Trainee';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-uni-trainees-list',
  templateUrl: './uni-trainees-list.component.html',
  styleUrls: ['./uni-trainees-list.component.css']
})
export class UniTraineesListComponent implements OnInit {

  popup = false
  name = 'Angular';
  trainee:Trainee[]=[];

  constructor(private router: Router,private apiService: ApiService) {
    let id:any = localStorage.getItem('Email');
 
    this.apiService.getUni2Data(id).subscribe((data: Trainee[]) => {
      this.trainee = data;
      console.log(data);
    });
  }

ngOnInit(): void {
}
goToPage(pageName:string, trainee: any){
  localStorage.setItem('trainee',JSON.stringify(trainee));
  this.router.navigate([`${pageName}`]);
}
goToPage1(pageName:string){
  // localStorage.setItem('trainee',trainee);
  this.router.navigate([`${pageName}`]);
}
}
