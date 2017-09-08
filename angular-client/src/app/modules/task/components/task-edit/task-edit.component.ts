import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task = {
    id: 1,
    tracker: '2',
    project: '1',
    title: 'My new task',
    description: 'My new task Description',
    status: '2',
    priority: '3',
    start_date: '09/04/2017',
    end_date: '30/04/2017',
    assignee: 'Andorra Test',
    parent: 'Task 2',
    estimate: 4,
    percent_done: '4',
    watcher: [
      {
        id: '1',
        name: 'Ali'
      },
      {
        id: '1',
        name: 'Hamza'
      }
      ]
  }

  constructor() { }

  ngOnInit() {
  }

}
