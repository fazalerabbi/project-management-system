import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Page404Component } from './components/404/page-404.component';

const errorPagesRoutes: Routes = [
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [ RouterModule.forChild(errorPagesRoutes) ],
  exports: [ RouterModule ]
})

export class ErrorPagesRoutingModule { }
