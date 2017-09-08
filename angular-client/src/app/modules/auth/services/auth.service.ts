import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { appConfig } from '../../../config/config';

@Injectable()
export class AuthService {
  private apiURL: string = appConfig.httpURL;
  constructor(private http: Http) {
  }
  login(data) {
    return this.http.post(this.apiURL, data);
  }
  register(data) {
    return this.http.post( this.apiURL, data )
      .map(
        (response: Response) => {
          return response.json();
        }
    );
  }
}
