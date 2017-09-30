import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;

  constructor(private service: AuthService, private flashMessageService: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.loginForm.invalid ) {
      this.flashMessageService.show('Please fill login form.', {cssClass: 'alert-error'});
    } else {
      this.service.login(this.loginForm.value)
        .subscribe((response) => {
          if (response) {
            this.flashMessageService.show('Wao, You are login.', {cssClass: 'alert-success'});
            this.router.navigate(['/my/dashboard']);
          } else {
            this.flashMessageService.show('Ahhh, Username/password doesn\'t match.', {cssClass: 'alert-error'});
          }
        });
    }
  }

}
