import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/Trainer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css'],
})
export class TrainerProfileComponent implements OnInit {

  trainer:Trainer[]=[];
  showedtrainer!:Trainer;
  dropdown = false;
  name = 'Angular';
  role: any;
  
  constructor(private router: Router, apiService: ApiService) {
    apiService.getTrainerData().subscribe((data: Trainer[]) => {
      // this.trainer = data;
      console.log(data);
    });

  }

  async ngOnInit() {
    this.role = await localStorage.getItem('role');
    if (this.role != 1) {
      console.log(' in on initthis.role: ', this.role);

      this.goToPage('');
    }
  }

  changertranee(shranee:Trainer){
    this.showedtrainer=shranee;
    console.log(this.showedtrainer,"kjh");
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
