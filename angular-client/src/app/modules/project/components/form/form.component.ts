import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/project';
import { JQueryEditor } from '../../../shared/jQueryHelpers/jQuery.editor';
import { JQuerySelect2 } from '../../../shared/jQueryHelpers/jQuery.select2';

@Component({
  selector: 'app-project-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() project: Project = new Project();
  @ViewChild('form') projectCreateForm: NgForm;
  constructor(private service: ProjectService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    JQueryEditor.init();
    JQuerySelect2.init();
  }

  onSubmit() {
    console.log(this.project);
    if ( this.projectCreateForm.valid ) {
      this.service.cuProject(this.project)
        .subscribe(
          (response) => {
            if(response.success) {
              if (this.project._id !== null ) {
                this.flashMessagesService.show('Project has been updated successfully.', {cssClass: 'alert-success'});
              } else {
                this.flashMessagesService.show('Project has been created successfully.', {cssClass: 'alert-success'});
              }
            }
          }
        );
    } else {
      console.log('Form is not valid', this.projectCreateForm);
    }
  }
}
