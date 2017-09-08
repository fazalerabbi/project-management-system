import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  private project: Project;

  constructor() {  }

  ngOnInit() {
    this.project = {
      id: '1',
      name: 'My Project 1',
      description: 'My Project description',
      users: [
        {
          id: '1',
          name: 'Fazal',
          email: 'fazal@gmail.com',
          password: '213123123123'
        },
        {
          id: '1',
          name: 'Fazal',
          email: 'fazal@gmail.com',
          password: '213123123123'
        },
      ]
    };
  }

}
