import { NgModule } from '@angular/core';

import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectComponent } from './components/project.component';
import { ProjectRoutingModule } from './project.routing.module';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent
  ],
  imports: [ ProjectRoutingModule ],
})

export class ProjectModule { }
