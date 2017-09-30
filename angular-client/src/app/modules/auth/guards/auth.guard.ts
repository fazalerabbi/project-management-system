import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router){

  }
  canActivate() {
    console.log('Auth');
    if(this.authService.isLoggin()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }

  }
  canActivateChild() {
    if(this.authService.isLoggin()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
