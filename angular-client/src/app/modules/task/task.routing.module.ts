import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const taskRoutes: Routes = [
  {
    path: 'my/tasks', children: [
      {
        path: '', component: TaskComponent
      },
      {
        path: 'create', component: TaskCreateComponent
      },
      {
        path: 'edit', component: TaskEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(taskRoutes)],
  exports: [RouterModule]
})

export class TaskRoutingModule { }
