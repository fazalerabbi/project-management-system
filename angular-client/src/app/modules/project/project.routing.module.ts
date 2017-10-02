import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';


const projectRoutes: Routes = [
  {
    path: 'my/projects',
    children: [
      { path: '', component: ProjectComponent },
      { path: 'create', component: ProjectCreateComponent },
      { path: ':id/edit', component: ProjectEditComponent },
      { path: ':id', component: ProjectComponent },
    ],
    canActivateChild: [AuthGuard]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(projectRoutes) ],
  exports: [ RouterModule ]
})

export class ProjectRoutingModule {}
