import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/models/Trainee';



@Component({
  selector: 'app-finishedtrainees',
  templateUrl: './finishedtrainees.component.html',
  styleUrls: ['./finishedtrainees.component.css']
})
export class FinishedtraineesComponent implements OnInit {

  popup = false
  name = 'Angular';
  trainee: Trainee[]=[];

  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getTraineesHoursDone().subscribe((data: Trainee[]) => {
      this.trainee = data;
      console.log(data);
    });
   }

  ngOnInit(): void {
  }
goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
}
}
