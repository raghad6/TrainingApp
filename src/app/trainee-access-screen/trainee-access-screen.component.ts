import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trainee-access-screen',
  templateUrl: './trainee-access-screen.component.html',
  styleUrls: ['./trainee-access-screen.component.css']
})
export class TraineeAccessScreenComponent implements OnInit {
  constructor(private router: Router) { }



  ngOnInit(): void {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
