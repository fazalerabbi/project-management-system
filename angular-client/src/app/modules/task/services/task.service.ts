import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { appConfig } from '../../../config/config';

@Injectable()
export class TaskService {
  private apiURL: string = appConfig.httpURL;
  constructor(private http: Http) {
  }

  /**
   * create or update task
   * @param task
   * @returns {Observable<any>}
   */
  cuTask(task) {
    if (task.hasOwnProperty('id')) {
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
  updateTask(task) {
    console.log('update task');
    return this.http.put(this.apiURL, task)
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
  createTask(task) {
    console.log('create task');
    return this.http.post(this.apiURL, task)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
