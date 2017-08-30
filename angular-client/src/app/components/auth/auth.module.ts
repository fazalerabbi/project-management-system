import {NgModule} from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ]
})

export class AuthModule { }
