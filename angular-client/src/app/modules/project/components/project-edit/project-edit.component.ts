import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  project = {
    id: 1,
    name: 'My Project',
    description: 'My Project description',
    users: [
      {
        id: 1,
        name: 'Fazal'
      },
      {
        id: 2,
        name: 'Ali'
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
