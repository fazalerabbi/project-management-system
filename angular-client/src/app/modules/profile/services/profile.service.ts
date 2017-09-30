import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { appConfig } from '../../../config/config';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class ProfileService{


  private apiURL: string = appConfig.httpURL;
  private headers: Headers = new Headers();

  constructor(private http: Http,
              private authService: AuthService) {
    this.headers.append('Content-Type', 'application/json'); // this.header
    this.headers.append('Authorization', this.authService.getTokenFromLocalStorage());

  }

  getProfile() {
    return this.http.get(this.apiURL + '/my/profile', {headers: this.headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * update the personal information
   * @param data
   * @returns {Observable<any>}
   */
  updatePersonalInfo(data) {
    console.log(data);
    return this.http.put(this.apiURL + '/my/profile', data, {headers: this.headers})
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /**
   * update password
   * @param data
   * @returns {Observable<any>}
   */
  updatePassword(data) {
    console.log(data);
    return this.http.post(this.apiURL, data)
      .map(
        (response: Response) => {
          response.json();
        }
      );
  }
}
