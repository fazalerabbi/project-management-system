import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const dashBoardRoutes: Routes = [
  {
    path: 'my/dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(dashBoardRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule { }
