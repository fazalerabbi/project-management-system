import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  private task: Task;

  constructor( private service: TaskService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.getTask();
    /*
        this.task = {
          id: '1',
          tracker: '2',
          project_id: '1',
          title: 'My new task',
          description: 'My new task Description',
          status: '2',
          priority: '3',
          start_date: '09/04/2017',
          end_date: '30/04/2017',
          assignee: 'Andorra Test',
          parent_id: 'Task 2',
          estimate_hour: '4',
          percent_done: '4',
          watchers: [
            {
              id: '1',
              name: 'Ali',
              email: 'ali@gmail.com',
              password: '12345'
            },
            {
              id: '1',
              name: 'Hamza',
              email: 'ali@gmail.com',
              password: '12345'
            }
          ]
        };
      }*/
  }

  getTask() {
    this.activatedRoute.params.subscribe(
      (params)=> {
          const taskId = params['id'];
          this.service.getOne(taskId).subscribe(
            (response) => {
              this.task = response.task;
            }
          );
      });
  }

}
