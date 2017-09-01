import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./components/profile.component";


const profileRoutes: Routes = [
  { path: 'my/profile', component: ProfileComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})

export class ProfileRoutingModule { }
