import { NgModule } from '@angular/core';
import { Page404Component } from './components/404/page-404.component';
import { ErrorPagesRoutingModule } from './error-pages.routing.module';

@NgModule({
  declarations: [ Page404Component ],
  imports: [ ErrorPagesRoutingModule ]
})

export class ErrorPagesModule { }
