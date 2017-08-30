import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "../components/auth/login/login.component";
import {RegisterComponent} from "../components/auth/register/register.component";

const authRoutes: Routes = [
  {
    path: 'auth', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'auth/register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
