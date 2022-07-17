import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl = 'http://localhost:4041/api/';

  constructor(private http:HttpClient) { }

  saveStudent(student: object): Observable<object> {
    return this.http.post('${this.baseUrl}'+'save-student', student);
  }
  loginStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'login', student);
}

  Result(student:object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'result', student);
  }

  getAll(): Observable<object>{
    return this.http.get(`${this.baseUrl}`+'getall');
  }
}                                           