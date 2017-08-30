import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from "./components/auth/auth.module";
import { AppRoutingModule } from "./routes/app.routing.module";

import { AppComponent } from './app.component';
import { ProfileModule } from "./components/profile/profile.module";
import { ProjectModule } from "./components/project/project.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AuthModule,
    ProfileModule,
    ProjectModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
