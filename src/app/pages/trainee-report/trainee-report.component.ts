import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TasksList from 'src/app/models/TasksList';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trainee-report',
  templateUrl: './trainee-report.component.html',
  styleUrls: ['./trainee-report.component.css']
})
export class TraineeReportComponent implements OnInit {
  popup = false
  name = 'Angular'; 
  tasks:TasksList[]=[];


  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addTasks(tasks: TasksList) {
    this.apiService.postTaskList(tasks).subscribe((res) => {
      console.log(res,"efjui");
    });
  }

  goToPage(pageName:string){
       this.router.navigate([`${pageName}`]);
  }  
 
}
