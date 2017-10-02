import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { appConfig } from '../../../config/config';
import { Task } from '../model/task';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class TaskService {
  private apiURL: string = appConfig.httpURL;
  private headers: Headers = new Headers();
  constructor(private http: Http,
              private authService: AuthService) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.authService.getTokenFromLocalStorage());
  }

  getAll() {
    return this.http.get(this.apiURL + '/my/tasks', {headers: this.headers})
      .map((response: Response) => {
          return response.json();
      });
  }

  getOne(id) {
    return this.http.get(this.apiURL + '/my/task/' + id, {headers: this.headers})
        .map((response: Response)=> {
            return response.json();
        });
  }

  /**
   * create or update task
   * @param task
   * @returns {Observable<any>}
   */
  cuTask(task: Task) {
    console.log(task._id);
    if (task._id !== null && task._id !== undefined) {
      return this.updateTask(task);
    } else {
      return this.createTask(task);
    }
  }

  /**
   * update the task's details
   * @param task
   * @returns {Observable<any>}
   */
  updateTask(task: Task) {
    return this.http.put(this.apiURL + '/my/tasks/' +  task._id + '/edit', task, {headers: this.headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * create new task
   * @param task
   * @returns {Observable<any>}
   */
  createTask(task: Task) {
    return this.http.post(this.apiURL, task)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
