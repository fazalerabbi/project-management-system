import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate() {
    return this.router.navigate(['my/dashboard']);
  }
}
