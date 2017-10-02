import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JQuerySidebar } from './modules/shared/jQueryHelpers/jQuery.sidebar';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    JQuerySidebar.init();
  }

  navigate() {
    return this.router.navigate(['my/dashboard']);
  }
}
