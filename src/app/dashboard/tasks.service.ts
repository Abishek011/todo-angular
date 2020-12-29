import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url="https://app--todo.herokuapp.com/user/dashBoard/viewTasks";

  constructor(private http:HttpClient) { }
  user;
  viewAllTasks(user){
    console.log("called");
    var httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'}),
    withCredentials:true, 
    observe: 'response' as 'response'
  }
    return this.http.get(this.url,httpOptions);
  }
}
