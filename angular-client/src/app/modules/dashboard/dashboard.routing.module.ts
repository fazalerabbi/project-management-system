import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';

const dashBoardRoutes: Routes = [
  {
    path: 'my/dashboard', component: DashboardComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(dashBoardRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule { }
