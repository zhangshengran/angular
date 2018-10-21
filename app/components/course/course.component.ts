import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient) { }
   tongbus;
  ngOnInit() {
    this.http.get('/api/tongbus').subscribe( data=>{ 
      this.tongbus = data;
      console.log(data);
     } );
  }

}