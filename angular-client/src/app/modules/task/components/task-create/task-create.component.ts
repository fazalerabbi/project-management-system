import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {

  task: {
    tracker: '',
    project: '',
    title: '',
    description: '',
    status: '',
    priority: '',
    start_date: '',
    end_date: '',
    assignee: '',
    parent: '',
    estimate: '',
    percent_done: '',
    watchers: [{}]
  };
  constructor() { }

  ngOnInit() {
  }

}
