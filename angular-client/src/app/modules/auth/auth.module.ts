import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class AuthModule { }
