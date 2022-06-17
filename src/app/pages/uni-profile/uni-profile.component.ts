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

  role:any;
  university:any;
  showUni!:University;

  constructor(private router: Router, apiService: ApiService) {
    let id:any = localStorage.getItem('Email');
    apiService.getUni1Data(id).subscribe((data: University[]) => {
      this.university=data[0];
      console.log(data);  
    })
   }
 
  
  async ngOnInit()  {
    this.role = await localStorage.getItem('role');
    if(this.role!=3){
      console.log(' in on initthis.role: ', this.role);
   this.goToPage('');
    }
    // this.changeUni();
  }

  changeUni(unidata:University){
    this.showUni=unidata;
    console.log(unidata,"djfj");
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
