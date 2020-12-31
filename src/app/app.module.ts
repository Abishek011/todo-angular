import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForm , FormsModule, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CommonModule } from '@angular/common';
import { ViewAllTaskComponent } from './dashboard/view-all-task/view-all-task.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';

const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {  
  suppressScrollX: true  
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    ViewAllTaskComponent,
    ProfileComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'user/dashBoard', component: DashboardComponent},
      {path: 'user', component: UserComponent},
      {path: '', redirectTo: '/user', pathMatch: 'full'},
      //{path: '**' ,component: PageNotFound}
    ]),
    PerfectScrollbarModule,
    CommonModule
  ],
  providers: [{provide:PERFECT_SCROLLBAR_CONFIG,useValue: P_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }

//#Ab1sh12345
