import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Title = 'Log In';

  constructor(private router: Router ,
    private titleService:Title) { }

  ngOnInit(): void {
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
