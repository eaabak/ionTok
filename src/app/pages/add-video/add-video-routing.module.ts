import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVideoPage } from './add-video.page';

const routes: Routes = [
  {
    path: '',
    component: AddVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVideoPageRoutingModule {}
