import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProjectModule } from './modules/project/project.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SideBarComponent } from './side-bar.component';
import { TaskModule } from './modules/task/task.module';
import { SettingsModule } from './modules/settings/settings.module';

@NgModule({
  declarations: [
    SideBarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    AuthModule,
    ProfileModule,
    ProjectModule,
    DashboardModule,
    TaskModule,
    SettingsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
