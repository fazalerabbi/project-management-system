import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { appConfig } from '../../../config/config';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SettingsService {
  private apiURL: string = appConfig.httpURL;
  constructor(private http: Http) {
  }

  /**
   * update the settings
   * @param settings
   * @returns {Observable<any>}
   */
  updateSettings(settings) {
    console.log(settings);
    return this.http.post(this.apiURL, settings)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
