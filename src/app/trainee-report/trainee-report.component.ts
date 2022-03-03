import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee-report',
  templateUrl: './trainee-report.component.html',
  styleUrls: ['./trainee-report.component.css']
})
export class TraineeReportComponent implements OnInit {

  popup = false
  name = 'Angular'; 

  constructor() { }

  ngOnInit(): void {
  }

}
