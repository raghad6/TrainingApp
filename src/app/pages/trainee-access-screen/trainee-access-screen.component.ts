import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/models/Trainee';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-trainee-access-screen',
  templateUrl: './trainee-access-screen.component.html',
  styleUrls: ['./trainee-access-screen.component.css']
})
export class TraineeAccessScreenComponent implements OnInit {

  traineee:any;
  popup = false;
  showedtranee!:Trainee;
  trainee: Trainee[]=[];
  
  constructor(private router: Router,private apiService: ApiService) {
    this.traineee =JSON.parse(localStorage.getItem('trainee')!.toString());
    console.log(this.traineee);
    
    // this.apiService.getUni2Data(id).subscribe((data: Trainee[]) => {
    //   this.traineee = data;
    //   console.log(data);
    // });
  }


  ngOnInit(): void {
  }

  changertranee(shranee:Trainee){
    this.showedtranee=shranee;
    this.popup=true;
  }

  gettranee(ID:number){
    this.apiService.getTraineesHoursDone().subscribe((data: Trainee[]) => {
      this.trainee = data;
      this.popup=true;
      console.log(data);
    });
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  // changertranee(shranee:Trainee){
  //   this.showedtranee=shranee;
  //   this.popup=true;
  // }
  
}
