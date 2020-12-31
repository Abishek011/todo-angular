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
     this.task.userLogin=this.router.getCurrentNavigation().extras;
     console.log(this.task.userLogin,"task user");
   }

  viewTasks:boolean =true;
  profile:boolean=false;
  addTask:boolean=false;
  viewAll(){
    this.viewTasks=!this.viewTasks;
    this.profile=!this.profile;
  }

  viewProfile()
  {
    this.profile=!this.profile;
    this.viewTasks=!this.viewTasks;
  }

  ngOnInit(): void {
    console.log(2);
  }

}
