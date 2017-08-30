import { NgModule } from "@angular/core";
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectComponent } from "./project.component";
import { ProjectRoutingModule } from "../../routes/project.routing.module";
import { ProjectListingComponent } from './project-listing/project-listing.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectListingComponent
  ],
  imports: [ ProjectRoutingModule ],
})

export class ProjectModule { }
