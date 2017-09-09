import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    FormsModule,
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileService
  ]
})

export class ProfileModule {}
