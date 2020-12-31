import { Component, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/user/user.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName;
  emailId;
  taskCount;
  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.userName=this.taskService.userDetails.userName;
    this.emailId=this.taskService.userDetails.emailId;
    this.taskCount=(this.taskService.userDetails.tasks).length;
  }

}
