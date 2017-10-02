import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private projects: Project[];
  constructor( private service: ProjectService ) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.service.getAll().subscribe(
      (response) => {
        this.projects = response.projects;
      },
      (error) => {

      }
    );
  }

}
