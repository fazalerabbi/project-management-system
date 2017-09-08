import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('form') loginForm: NgForm;

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.loginForm.valid ) {
        this.service.login(this.loginForm.value)
          .subscribe((response) => console.log(response));
    } else {
      console.log('Form is not valid', this.loginForm);
    }
  }

}
