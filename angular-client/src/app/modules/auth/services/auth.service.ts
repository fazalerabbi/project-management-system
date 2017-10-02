import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { FlashMessagesService } from 'angular2-flash-messages';
import { tokenNotExpired } from 'angular2-jwt';

import { appConfig } from '../../../config/config';

@Injectable()
export class AuthService {
  private apiURL: string = appConfig.httpURL;
  private headers: Headers = new Headers();
  constructor(private http: Http, private flashMessageService: FlashMessagesService, private router: Router) {
    this.headers.append('Content-Type', 'application/json');
  }
  login(data) {
    return this.http.post(this.apiURL + '/auth/login', data, {headers: this.headers}).
      map(
      (response: Response) => {
        const res = response.json();
        if (res.success) {
          this.setUserAndTokenToLocalStorage(res.token, res.user);
          return true;
        } else {
          return false;
        }
      }
    );
  }
  isLoggin() {
    return tokenNotExpired('id_token');
  }
  register(data) {
    return this.http.post( this.apiURL + '/auth/register', data, {headers: this.headers} )
      .map(
        (response: Response) => {
          return response.json();
        }
    );
  }
  setUserAndTokenToLocalStorage(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user) );
  }
  getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }
  getTokenFromLocalStorage() {
    return localStorage.getItem('id_token');
  }
  logOut() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.flashMessageService.show('You are logout', {
      cssClass: 'alert-success'
    });
    this.router.navigate(['/auth/login']);
  }
}
