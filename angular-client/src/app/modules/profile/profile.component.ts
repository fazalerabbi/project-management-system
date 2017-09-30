import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') updateProfileForm: NgForm;
  @ViewChild('updatePasswordForm') updatePasswordForm: NgForm;

  constructor(private service: ProfileService,
              private flashMessageService: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.service.getProfile()
      .subscribe(
        (response) => {
          this.updateProfileForm.form.patchValue(response.user);
        },
        (error) => {
          if(error.status === 401) {
              this.flashMessageService.show('You are not authorized to access this page.', {cssClass: 'alert-success'});
              this.router.navigate(['/auth/login']);
            }
          }
        );
  }

  /**
   * update user profile
   */
  onProfileUpdate() {
    if ( this.updateProfileForm.valid ) {
      this.service.updatePersonalInfo( this.updateProfileForm.value )
        .subscribe(
          (response) => {
            if(response.success) {
              this.flashMessageService.show('Profile updated successfully', {cssClass: 'alert-success'});
            }
          }
        );
    } else {
      this.flashMessageService.show('Please fill required data.', {cssClass: 'alert-error'});
    }
  }

  /**
   * update user Password
   */
  onPasswordUpdate() {
    if ( this.updatePasswordForm.valid ) {
      this.service.updatePassword(this.updatePasswordForm.value)
        .subscribe(
          (response) => {
            console.log(response, this.updatePasswordForm);
          }
        );
    } else {
      console.log('Form is not valid', this.updatePasswordForm);
    }

  }

}
