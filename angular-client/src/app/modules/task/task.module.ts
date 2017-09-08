import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskRoutingModule } from './task.routing.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent,
    TaskEditComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  providers: [
    TaskService
  ]
})

export class TaskModule {}
