import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsAndPrivacyPageRoutingModule } from './settings-and-privacy-routing.module';

import { SettingsAndPrivacyPage } from './settings-and-privacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsAndPrivacyPageRoutingModule
  ],
  declarations: [SettingsAndPrivacyPage]
})
export class SettingsAndPrivacyPageModule {}
