import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    FormsModule,
    SettingsRoutingModule
  ],
  providers: [
    SettingsService
  ]
})

export class SettingsModule {}
