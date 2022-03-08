import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.css']
})
export class TraineeProfileComponent implements OnInit {
  constructor(private router: Router) { }



  ngOnInit(): void {
    
  }
goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }

}
