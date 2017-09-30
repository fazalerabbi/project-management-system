import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../auth/guards/auth.guard';


const profileRoutes: Routes = [
  { path: 'my/profile', component: ProfileComponent, canActivate: [AuthGuard]}
];
@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})

export class ProfileRoutingModule { }
