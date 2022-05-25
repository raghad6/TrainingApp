import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/models/Trainee';

@Component({
  selector: 'app-evaluatetrainee',
  templateUrl: './evaluatetrainee.component.html',
  styleUrls: ['./evaluatetrainee.component.css']
})
export class EvaluatetraineeComponent implements OnInit {

  trainee:Trainee[]=[];
  
  constructor(private router: Router,private apiService:ApiService) { 
    this.apiService.getTraineesList().subscribe((data: Trainee[]) => {
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
