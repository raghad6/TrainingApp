import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-trainee-report',
  templateUrl: './trainee-report.component.html',
  styleUrls: ['./trainee-report.component.css']
})

export class TraineeReportComponent implements OnInit {
  popup = false
  dialog = false
  name = 'Angular';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  


  // openDialog() {
  //   this.dialog.open(this.DialogElementsExampleDialog);
  // }
  // export class: any DialogElementsExampleDialog: any {}


}

