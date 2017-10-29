import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {

  private task: Task;
  constructor() { }

  ngOnInit() {
    this.task =  {
      _id: null,
      tracker: '',
      project_id: '',
      title: '',
      description: '',
      status: '',
      priority: '',
      start_date: '',
      end_date: '',
      assignee: '',
      parent_id: '',
      estimate_hour: '',
      percent_done: '',
      watchers: []
    };
  }

}
