import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
    console.log('constructor');
  }

  ngOnInit() {
    /*
    console.log('ngOnInit');
    JQuerySidebar.init();
    */
  }

  navigate() {
    return this.router.navigate(['my/dashboard']);
  }
}
