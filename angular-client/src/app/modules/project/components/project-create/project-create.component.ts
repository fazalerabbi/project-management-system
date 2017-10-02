import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  private project: Project = new Project();
  constructor() {
  }

  ngOnInit() {
  }

}
