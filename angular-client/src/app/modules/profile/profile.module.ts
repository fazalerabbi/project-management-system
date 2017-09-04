import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    FormsModule,
    ProfileRoutingModule
  ]
})

export class ProfileModule {}
