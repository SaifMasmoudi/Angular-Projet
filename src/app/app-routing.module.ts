import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SalleComponent } from './salle/salle.component';
import { ContactComponent } from './contact/contact.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { SalleFormComponent } from './salle-form/salle-form.component';
const routes: Routes = [
  {
    path:':id/editSalle',
    pathMatch:"full",
    component: SalleFormComponent
   },
  {
    path:'createSalle',
    pathMatch:'full',
    component:SalleFormComponent
  },
  {
    path:':id/editClient',
    pathMatch:"full",
    component: ClientFormComponent
   },
  {
    path:'createClient',
    pathMatch:'full',
    component:ClientFormComponent
  },
  {
    path:'salle',
    pathMatch:'full',
    component:SalleComponent
  },
  {
    path:'contact',
    pathMatch:'full',
    component:ContactComponent
  },
  {
    path:'reservation',
    pathMatch:'full',
    component:ReservationComponent
  },
  {
    path:'home',
    pathMatch:'full',
    component:HomeComponent
  },

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
