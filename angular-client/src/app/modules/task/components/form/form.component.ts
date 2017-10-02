import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task';
import { JQueryEditor } from '../../../shared/jQueryHelpers/jQuery.editor';
import { JQuerySelect2 } from '../../../shared/jQueryHelpers/jQuery.select2';
import { JQueryAutocomplete } from '../../../shared/jQueryHelpers/jQuery.autocomplete';
import { JQueryDatepicker } from '../../../shared/jQueryHelpers/jQuery.datepicker';


@Component({
  selector: 'app-task-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() task: Task;
  taskForm: FormGroup;
  constructor(private service: TaskService) { }

  ngOnInit() {
    const testArray = [
      {
        value: 'Pakistan',
        data: 'pk',
      },
      {
        value: 'China',
        data: 'ch',
      }
    ];

    JQueryEditor.init();
    JQuerySelect2.init();
    JQueryAutocomplete.parent(testArray);
    JQueryAutocomplete.assignee(testArray);
    JQueryDatepicker.init();

    this.taskForm = new FormGroup({
      'tracker': new FormControl(this.task.tracker),
      'project_id': new FormControl(this.task.project_id),
      'title': new FormControl(this.task.title),
      'description': new FormControl(this.task.description),
      'status': new FormControl(this.task.status),
      'priority': new FormControl(this.task.priority),
      'start_date': new FormControl(this.task.start_date),
      'end_date': new FormControl(this.task.end_date),
      'assignee': new FormControl(this.task.assignee),
      'parent_id': new FormControl(this.task.parent_id),
      'estimate_hour': new FormControl(this.task.estimate_hour),
      'percent_done': new FormControl(this.task.percent_done),
      'watchers': new FormControl(this.task.watchers)
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskId = this.task._id;
      this.task = this.taskForm.value;
      this.task._id = taskId;
      this.service.cuTask(this.task)
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
    } else {
      console.log('FOrm is not valid', this.taskForm);
    }
  }


}
