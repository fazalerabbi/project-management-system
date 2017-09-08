import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { appConfig } from '../../../config/config';
import { Project } from '../model/project';

@Injectable()
export class ProjectService {

  private apiURL: string = appConfig.httpURL;

  constructor(private http: Http) {
  }

  /**
   * create/update the project details
   * @param data
   * @returns {Observable<any>}
   */
  cuProject(project: Project) {
    if (project.id !== null) {
      return this.updateProject(project);
    } else {
      return this.createProject(project);
    }
  }

  /**
   * send post request to create project
   * @param data
   * @returns {Observable<any>}
   */
  createProject(project: Project) {
    console.log('Create', project);
    return this.http.post(this.apiURL, project)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * send put request to update project details
   * @param data
   * @returns {Observable<any>}
   */
  updateProject(project: Project) {
    console.log('update', project);
    return this.http.put( this.apiURL, project )
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * get All Projects
   * @returns {Observable<any>}
   */
  getAll() {
    return this.http.get(this.apiURL)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * get single project
   * @param id
   * @returns {Observable<any>}
   */
  getOne(id) {
    return this.http.get(this.apiURL, id)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
