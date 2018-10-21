import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';

const rooter = [
  {path: 'home', component: HomeComponent },
  {path: 'course', component: CourseComponent },
  {path: 'shequ', component: ShequComponent },
  {path: 'tongbu', component: TongbuComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rooter)
  ],
  declarations: []
})
export class AppRoutingModule { }
