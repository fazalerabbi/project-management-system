import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskRoutingModule } from './task.routing.module';

@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent,
    TaskEditComponent
  ],
  imports: [
    TaskRoutingModule
  ]
})

export class TaskModule {}
