import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-project-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() project;
  @ViewChild('form') projectCreateForm: NgForm;
  constructor(private service: ProjectService) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.projectCreateForm.valid ) {
      this.service.cuProject(this.project)
        .subscribe(
          (response) => {
            console.log(response);
          }
        );
    } else {
      console.log('Form is not valid', this.projectCreateForm);
    }
  }
}
