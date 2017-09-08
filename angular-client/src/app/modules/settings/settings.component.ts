import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @ViewChild('form') settingsForm: NgForm;

  constructor(private service: SettingsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.settingsForm.valid ) {
      this.service.updateSettings(this.settingsForm.value)
        .subscribe(
          (response) => {
            console.log(response);
          }
        );
    } else {
      console.log('Form is not valid', this.settingsForm);
    }
  }

}
