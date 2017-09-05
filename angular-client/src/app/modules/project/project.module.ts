import { NgModule } from '@angular/core';

import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectComponent } from './components/project.component';
import { ProjectRoutingModule } from './project.routing.module';
import { FormsModule } from "@angular/forms";
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    ProjectRoutingModule
  ],
})

export class ProjectModule { }
