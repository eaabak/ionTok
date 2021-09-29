import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsAndPrivacyPage } from './settings-and-privacy.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsAndPrivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsAndPrivacyPageRoutingModule {}
