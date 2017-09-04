import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  @ViewChild('form') projectCreateForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.projectCreateForm);
  }

}
