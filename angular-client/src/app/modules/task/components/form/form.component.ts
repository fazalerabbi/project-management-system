import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() task;
  taskForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'tracker': new FormControl(null, Validators.required),
      'project_id': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      'priority': new FormControl(null, Validators.required),
      'start_date': new FormControl(null, Validators.required),
      'end_date': new FormControl(null, Validators.required),
      'assignee': new FormControl(null, Validators.required),
      'parent_id': new FormControl(null, Validators.required),
      'estimate_hour': new FormControl(null, Validators.required),
      'percent_done': new FormControl(null, Validators.required),
      'watchers': new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    console.log(this.taskForm);
  }

}
