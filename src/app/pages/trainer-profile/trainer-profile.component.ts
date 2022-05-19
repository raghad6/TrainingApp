import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  constructor(private router: Router) { }
  dropdown = false
  name = 'Angular'
  role:any;

async ngOnInit()  {
    this.role = await localStorage.getItem('role');
    if(this.role!=1){
      console.log(' in on initthis.role: ', this.role);

   this.goToPage('');
    }
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
