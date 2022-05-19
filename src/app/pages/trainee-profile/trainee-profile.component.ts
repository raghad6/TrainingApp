import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.css']
})
export class TraineeProfileComponent implements OnInit {
  constructor(private router: Router) { }
  dropdown = false
  name = 'Angular'
  role:any;

  async ngOnInit()  {
    this.role = await localStorage.getItem('role');
    if(this.role!=2){
      console.log(' in on initthis.role: ', this.role);

   this.goToPage('');
    }
  }
goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }

}
