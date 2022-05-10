import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-uni-trainees-list',
  templateUrl: './uni-trainees-list.component.html',
  styleUrls: ['./uni-trainees-list.component.css']
})
export class UniTraineesListComponent implements OnInit {

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
