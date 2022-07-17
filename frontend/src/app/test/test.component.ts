import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private studentservice:StudentService) { }
  public id:any;

  public ans:any;

  public result:any;

  public sendata=[];

ansAI=["c","a","b","b"]
 quizAI = [
    {
        question: "The father of AI is:",
        a: "Alan Turing",
        b: "Charles Babage",
        c: "John McCarthy",
        d: "none",
        cor: "c",
        n:1,
    },
    {
        question: "The proposition symbols in AI are?",
        a: "true & false",
        b: "true,false&null",
        c: "true",
        d: "false",
        cor: "a",
        n:2,
    },
    {
        question: "How many types of recognition are there in AI?",
        a: "5",
        b: "3",
        c: "2",
        d: "1",
        cor: "b",
        n:3,
    },
    {
        question: "How many types of quantification are there in AI?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        cor: "b",
        n:4,
    },
  ]
ansOS=["d","c","c","c"]
  quizOS = [
    {
        question: "What does Os X has ?",
        a: "monolithic with modules",
        b: "microlernel",
        c: "monolithic kernel",
        d: "hybrid kernel",
        n:1,
    },
    {
        question: "The main memory accomodates__________.",
        a: "CPU",
        b: "user processes",
        c: "operating system",
        d: "all",
        n:2,
    },
    {
        question: "Which of the following is not an OS?",
        a: "windows",
        b: "linux",
        c: "oracle",
        d: "dos",
        n:3,
    },
    {
        question: "When was the first OS developed?",
        a: "1948",
        b: "1949",
        c: "1950",
        d: "1951",
        n:4,
    },
  ]
ansDataStructures=["a","c","c","a"];
  quizDataStructures = [
    {
        question: "Which of the following is a linear DS ?",
        a: "array",
        b: "avl tree",
        c: "binary trees",
        d: "graphs",
        n:1,
    },
    {
        question: "Time complexity for binary search algorithm ?",
        a: "O(n)",
        b: "O(1)",
        c: "O(log2n)",
        d: "O(n^2)",
        n:2,
    },
    {
        question: "Minimum no of queues to implement in stack is ?",
        a: "3",
        b: "4",
        c: "1",
        d: "2",
        n:3,
    },
    {
        question: "Stack is also calles as ?",
        a: "LIFO",
        b: "FILO",
        c: "LILO",
        d: "All of the above",
        n:4,
    },
  ]
public selectedQuiz:any;
public dbdata:String;
public anscheck:any;
public sid:any;
  quizQ={1:this.quizAI,0:this.quizOS,2:this.quizDataStructures};
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id2'); 
      this.sid=params.get('id');
  });
  console.log(this.id);
  console.log(this.sid);
  this.selectedQuiz=this.quizQ[this.id];
  console.log(this.selectedQuiz)
  if(this.id==0){
    this.anscheck=this.ansOS;
    this.dbdata="OS";
  }
  else if(this.id==1){
    this.anscheck=this.ansAI
    this.dbdata="AI";
  }
  else{
    this.anscheck=this.ansDataStructures
    this.dbdata="DataStructures";
  }
  }
  public score=0;
  public Fin:any;
  scoregrn(e){
    this.ans=e.target.id;
    if(this.anscheck[e.target.name-1]==this.ans)
    {
    this.score++;
    }
      this.Fin="Finish/"+this.score;  

  }
 
  chec(){
    console.log(this.Fin);

  }
  
  send() {
    //pass a string  selectedFile
    this.sendata.push(this.score);
    this.sendata.push(this.dbdata);
    this.sendata.push(this.sid)
    console.log(this.sendata)
    this.studentservice.Result(this.sendata).subscribe(data=> this.result = 
    data);
    }

}
