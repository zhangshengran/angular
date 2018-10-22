import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  shequs;
  ngOnInit() {
    this.http.get(`/api/shequs`).subscribe(data=>{
      this.shequs = data;
      console.log(this.shequs)
    })
  }
}
