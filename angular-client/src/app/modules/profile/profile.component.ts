import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') updateProfileForm: NgForm;
  @ViewChild('updatePasswordForm') updatePasswordForm: NgForm;

  constructor(private service: ProfileService) { }

  ngOnInit() {
  }

  /**
   * update user profile
   */
  onProfileUpdate() {
    if ( this.updateProfileForm.valid ) {
      this.service.updatePersonalInfo( this.updateProfileForm.value )
        .subscribe(
          (response) => {
            console.log(response, this.updateProfileForm);
          }
        );
    } else {
      console.log('Form is not valid', this.updateProfileForm);
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
