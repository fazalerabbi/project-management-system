import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { appConfig } from '../../../config/config';

@Injectable()
export class ProfileService {
  private apiURL: string = appConfig.httpURL;

  constructor(private http: Http) {
  }

  /**
   * update the personal information
   * @param data
   * @returns {Observable<any>}
   */
  updatePersonalInfo(data) {
    console.log(data);
    return this.http.post(this.apiURL, data)
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
