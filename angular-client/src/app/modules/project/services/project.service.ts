import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { appConfig } from '../../../config/config';
import { Project } from '../model/project';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class ProjectService {
  private apiURL: string = appConfig.httpURL;
  private headers: Headers = new Headers();

  constructor(private http: Http, private authService: AuthService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.authService.getTokenFromLocalStorage());
  }

  /**
   * create/update the project details
   * @param data
   * @returns {Observable<any>}
   */
  cuProject(project: Project) {
    if (project._id !== null && project._id !== undefined) {
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
    return this.http.post(this.apiURL + '/my/projects/create', project, {headers: this.headers})
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
  updateProject( project: Project ) {
    return this.http.put( this.apiURL + '/my/projects/'+ project._id +'/edit', project, {headers: this.headers} )
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
    return this.http.get(this.apiURL + '/my/projects', {headers: this.headers})
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
    return this.http.get(this.apiURL + '/my/project/'+id, {headers: this.headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
