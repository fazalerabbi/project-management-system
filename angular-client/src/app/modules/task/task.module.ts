import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskRoutingModule } from './task.routing.module';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TaskComponent,
    TaskCreateComponent,
    TaskEditComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    TaskRoutingModule
  ]
})

export class TaskModule {}
