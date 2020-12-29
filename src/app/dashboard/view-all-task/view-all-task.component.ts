import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-view-all-task',
  templateUrl: './view-all-task.component.html',
  styleUrls: ['./view-all-task.component.css']
})
export class ViewAllTaskComponent implements OnInit {

  constructor(private task:TasksService) { }
  tasks;
  ngOnInit(): void {
    this.task.viewAllTasks({}).subscribe(data=>{
      console.log(data);
    });
  }

}
