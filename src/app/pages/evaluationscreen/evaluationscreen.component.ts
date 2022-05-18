import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluationscreen',
  templateUrl: './evaluationscreen.component.html',
  styleUrls: ['./evaluationscreen.component.css']
})
export class EvaluationscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}
}
