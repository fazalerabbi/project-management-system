import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from '../components/project/project.component';
import { ProjectCreateComponent } from '../components/project/project-create/project-create.component';
import { ProjectEditComponent } from '../components/project/project-edit/project-edit.component';

const projectRoutes: Routes = [
  {
    path: 'my/projects', component: ProjectComponent,
    children: [
      { path: 'create', component: ProjectCreateComponent },
      { path: 'edit', component: ProjectEditComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(projectRoutes) ],
  exports: [ RouterModule ]
})

export class ProjectRoutingModule {}
