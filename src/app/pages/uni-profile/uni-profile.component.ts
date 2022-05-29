import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import University from 'src/app/models/University';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-uni-profile',
  templateUrl: './uni-profile.component.html',
  styleUrls: ['./uni-profile.component.css']
})
export class UniProfileComponent implements OnInit {

 dropdown = false
  name = 'Angular'
  role:any;
  uni:University[]=[];

  constructor(private router: Router, apiService: ApiService) {
    apiService.getUniData().subscribe((data: University[]) => {
      console.log(data);  
    })
   }
 
  
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
