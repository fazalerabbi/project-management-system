import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  private project: Project;

  constructor(private projectService: ProjectService,
              private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const projectId = params['id'];
        this.projectService.getOne(projectId).subscribe(
          (response) => {
            this.project = response.project;
          }
        );
      }
    );
  }

}
