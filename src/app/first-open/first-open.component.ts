import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-first-open',
  templateUrl: './first-open.component.html',
  styleUrls: ['./first-open.component.css']
})
export class FirstOpenComponent implements OnInit {

  title = 'angulartitle';
  
  constructor(private router: Router,
    private titleService:Title) {
     }

  ngOnInit() {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
