import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import {AuthGuard} from '../app/guard/auth.guard';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {PagenotfoundComponent} from '../app/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',canActivate:[AuthGuard] ,component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
