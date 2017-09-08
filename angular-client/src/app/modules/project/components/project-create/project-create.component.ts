import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  private project: Project;
  constructor() { }

  ngOnInit() {
    this.project = {
      id: null,
      name: '',
      description: '',
      users: [
      ]
    };
  }

  onSubmit() {
    console.log(this.project);
  }

}
