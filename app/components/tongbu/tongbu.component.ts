import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {
  courseId:number;
courses;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.http.get('/api/courses').subscribe((data)=>{
      this.courses = data;
   })
  }

}

