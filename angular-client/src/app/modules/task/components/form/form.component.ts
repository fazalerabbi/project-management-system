import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskService } from '../../services/task.service';
import {Response} from "@angular/http";


@Component({
  selector: 'app-task-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() task;
  taskForm: FormGroup;
  constructor(private service: TaskService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'tracker': new FormControl(null),
      'project_id': new FormControl(null),
      'title': new FormControl(null),
      'description': new FormControl(null),
      'status': new FormControl(null),
      'priority': new FormControl(null),
      'start_date': new FormControl(null),
      'end_date': new FormControl(null),
      'assignee': new FormControl(null),
      'parent_id': new FormControl(null),
      'estimate_hour': new FormControl(null),
      'percent_done': new FormControl(null),
      'watchers': new FormControl(null)
    });
  }
  onSubmit() {
    if (this.taskForm.valid) {
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
