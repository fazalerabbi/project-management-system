import { Component } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private authService: AuthService){ }

  onLogout() {
    this.authService.logOut();
  }


}
