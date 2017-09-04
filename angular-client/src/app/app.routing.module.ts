import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'my/dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
