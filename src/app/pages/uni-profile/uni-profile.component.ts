import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uni-profile',
  templateUrl: './uni-profile.component.html',
  styleUrls: ['./uni-profile.component.css']
})
export class UniProfileComponent implements OnInit {

  constructor(private router: Router) { }
  dropdown = false
  name = 'Angular'
  role:any;

  
  async ngOnInit()  {
    this.role = await localStorage.getItem('role');
    if(this.role!=3){
      console.log(' in on initthis.role: ', this.role);

   this.goToPage('');
    }
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
