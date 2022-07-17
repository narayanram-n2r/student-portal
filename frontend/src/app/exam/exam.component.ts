import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute) { }

  public sid:any;
  public tes:any;

  public app:any;
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.sid = params.get('id1');      
  });
  console.log(this.sid);
  this.tes="Test/"+this.sid;
  }
  // selexam(e:any){
  //   this.app.push(e.target.id);
  //   this.app.push(this.sid);
  //console.log(this.app)
  // }
}
