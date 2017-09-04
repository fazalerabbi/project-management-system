import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') updateProfileForm: NgForm;
  @ViewChild('updatePasswordForm') updatePasswordForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onProfileUpdate() {
    console.log(this.updateProfileForm);
  }

  onPasswordUpdate() {
    console.log(this.updatePasswordForm);
  }

}
