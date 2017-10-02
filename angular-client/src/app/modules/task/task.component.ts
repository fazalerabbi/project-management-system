import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import {Task} from './model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private tasks: Task[];
  constructor(private service: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks(){
    this.service.getAll().subscribe(
      (response) => {
        this.tasks = response.tasks;
      }
    );
  }

}
