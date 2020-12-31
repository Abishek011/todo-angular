import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url="https://app--todo.herokuapp.com/user/dashBoard/viewTasks";

  constructor(private http:HttpClient) { }
  userLogin;
  userDetails;
  viewAllTasks(){
    console.log(this.userLogin," yes");
    var head=new HttpHeaders();
  head.set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.url,this.userLogin,{headers:head});
  }
}
