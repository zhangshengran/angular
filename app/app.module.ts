import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { ErrorComponent } from './components/error/error.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
const rooter = [
  {path: 'home', component: HomeComponent },
  {path: 'course', component: CourseComponent },
  {path: 'shequ', component: ShequComponent },
  {path: 'tongbu', component: TongbuComponent },
  {path: 'tongbu/:course.id', component: TongbudetailComponent },
  {path: 'course/:tongbu.id', component: CoursedetailComponent },

  { path: "", redirectTo:"home", pathMatch:"full"},
  {path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HeaderComponent,
    ErrorComponent ,
    TongbudetailComponent,
    CoursedetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    RouterModule.forRoot(rooter)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
