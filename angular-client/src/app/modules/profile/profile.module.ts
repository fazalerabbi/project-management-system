import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    FormsModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileService
  ]
})

export class ProfileModule {}
