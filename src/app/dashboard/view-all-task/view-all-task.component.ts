import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-view-all-task',
  templateUrl: './view-all-task.component.html',
  styleUrls: ['./view-all-task.component.css']
})
export class ViewAllTaskComponent implements OnInit {

  constructor(private task:TasksService,private dashboard:DashboardComponent) { }
  tasks;
  addTasks()
  {
    this.dashboard.addTask=!this.dashboard.addTask;
    this.dashboard.profile=false;
    this.dashboard.viewTasks=false;
  }

  ngOnInit(): void {
    this.task.viewAllTasks().subscribe(data=>{
      this.task.userDetails=data;
      this.tasks=this.task.userDetails.tasks;
      console.log(this.tasks);
    });
  }


}
