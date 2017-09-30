import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../../users/model/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') registerForm: NgForm;
  private user: User = new User();

  constructor(private flashMessageService: FlashMessagesService,
              private service: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.flashMessageService.show('Please fill complete form.', {cssClass: 'alert-error'});
    } else {
      this.service.register(this.user).subscribe((response) => {
        if (response.success) {
          this.registerForm.resetForm();
          this.router.navigate(['/auth/login']).then(() => {
            this.flashMessageService.show(response.message, {cssClass: 'alert-success'});
          });
        }

      });
    }
  }

}
