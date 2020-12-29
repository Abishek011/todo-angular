import { Component, Directive, OnInit } from '@angular/core';
import { NgForm,  NgModel } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'TODO-App';
  loginSwitch:boolean=true;
  register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementsByClassName("bttn");
    x.style.left = "-400px";
    y.style.left = "50px";
    this.loginSwitch=!this.loginSwitch;
  }

login() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementsByClassName("bttn");
    x.style.left = "50px";
    y.style.left = "450px";
    this.loginSwitch=!this.loginSwitch;
  } 

  constructor(private http:HttpClient,private router:Router){}
  dat;
  onLogIn(form:NgForm){
    var responses;
    var httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'}),
    withCredentials:true, 
    observe: 'response' as 'response',
  }
  httpOptions.headers.set('Access-Control-Allow-Origin', '*');
  var head=new HttpHeaders();
  head.set('Access-Control-Allow-Origin', '*');
    console.log(form.value);
   // httpOptions.append(withcre)
    this.http.post('https://app--todo.herokuapp.com/user/logIn',form.value,{headers:head}).subscribe(data=>{
      console.log(data);  
    responses=data;
     this.dat=responses;
     if(responses.dashBoard.emailId.includes(form.value.emailId))
      {
        this.router.navigate(['user/dashBoard'],responses);
      }
    },err=>{
      //if(err.error.Message.includes("User already exist"))
      console.log({"errorrs":err});
      alert("error while logIn");

    });
  }

  onSignUp(form:NgForm){
    var responses;
    var httpOptions=new Headers();
    console.log(form.value);
    httpOptions.append('Content-Type', 'application/json');
    this.http.post('https://app--todo.herokuapp.com/user',form.value).subscribe(data=>{
      responses=data;  
      if(responses.Message.includes("User Created"))
      {
        alert("SignUp successful");
        this.router.navigate(['user']);
      }
    },err=>{
      //if(err.error.Message.includes("User already exist"))
      console.log({"errorrs":err});
      alert("error while signUp");

    });
  }

  ngOnInit(): void {
  }
  //!23Qwert45

}
