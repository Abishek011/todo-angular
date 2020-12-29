import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor(private http:HttpClient,private task:TasksService,private router:Router) {
     this.task.user=this.router.getCurrentNavigation().extras;
     console.log(this.task.user);
   }
  viewTasks:boolean =false;
  viewAll(){
    this.viewTasks=!this.viewTasks;
  }
  viewProfile(){
    console.log("profile");
  }
  ngOnInit(): void {
    console.log(2);
  }

}
