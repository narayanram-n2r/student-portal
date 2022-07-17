import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private studentservice:StudentService) { }
studreport:any;
  ngOnInit() {
    this.save();
  }
  save() {
    this.studentservice.getAll()
      .subscribe(data => {this.setSubscribeData(data)})
   
  }
  setSubscribeData(x){
    this.studreport=x;
    console.log(this.studreport);
  }
}
