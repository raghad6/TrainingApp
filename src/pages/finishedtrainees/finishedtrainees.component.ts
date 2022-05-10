import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finishedtrainees',
  templateUrl: './finishedtrainees.component.html',
  styleUrls: ['./finishedtrainees.component.css']
})
export class FinishedtraineesComponent implements OnInit {

  popup = false
  name = 'Angular';
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
}
}
