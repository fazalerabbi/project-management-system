import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectComponent } from './components/project.component';
import { ProjectRoutingModule } from './project.routing.module';
import { FormComponent } from './components/form/form.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProjectRoutingModule
  ],
  providers: [
    ProjectService
  ]
})

export class ProjectModule { }
