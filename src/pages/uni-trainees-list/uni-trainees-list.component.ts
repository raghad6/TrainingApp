import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-uni-trainees-list',
  templateUrl: './uni-trainees-list.component.html',
  styleUrls: ['./uni-trainees-list.component.css']
})
export class UniTraineesListComponent implements OnInit {

  popup = false
  name = 'Angular'; 

  constructor(private router: Router) { }

ngOnInit(): void {
}
goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}
}
