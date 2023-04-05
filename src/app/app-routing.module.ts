import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointComponent } from './components/add-appoint/add-appoint.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'appoint',component:AppointmentsListComponent},
  {path:'addAppoint',component:AddAppointComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
