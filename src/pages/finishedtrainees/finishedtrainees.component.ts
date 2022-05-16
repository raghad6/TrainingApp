import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-finishedtrainees',
  templateUrl: './finishedtrainees.component.html',
  styleUrls: ['./finishedtrainees.component.css']
})
export class FinishedtraineesComponent implements OnInit {

  popup = false
  name = 'Angular';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
}
}
