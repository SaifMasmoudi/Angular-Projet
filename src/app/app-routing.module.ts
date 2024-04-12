import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
const routes: Routes = [

  {
    path:'client',
    pathMatch:'full',
    component:ClientComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'members',
    pathMatch:'full',
    component:MemberComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'members'

  },
  {
   path:':id/edit',
   pathMatch:"full",
   component: MemberFormComponent
  },
  
 
   {
    path:'dashboard',
    pathMatch:"full",
    component: DashboardComponent
   }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
