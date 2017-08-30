import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthRoutingModule } from "./auth.routing.module";
import { ProfileRoutingModule } from "./profile.routing.module";

const appRoutes: Routes = [

];

@NgModule({
  imports: [
    AuthRoutingModule,
    ProfileRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
