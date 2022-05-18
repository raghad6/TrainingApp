import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-evaluatetrainee',
  templateUrl: './evaluatetrainee.component.html',
  styleUrls: ['./evaluatetrainee.component.css']
})
export class EvaluatetraineeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
