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
  
  constructor(private router: Router, apiService: ApiService) {
    apiService.getTrainerData().subscribe((data: Trainer[]) => {
      // this.trainer = data;
      console.log(data);
    });

  }
  dropdown = false;
  name = 'Angular';
  role: any;

  async ngOnInit() {
    this.role = await localStorage.getItem('role');
    if (this.role != 1) {
      console.log(' in on initthis.role: ', this.role);

      this.goToPage('');
    }
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
