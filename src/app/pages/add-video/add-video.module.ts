import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVideoPageRoutingModule } from './add-video-routing.module';

import { AddVideoPage } from './add-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVideoPageRoutingModule
  ],
  declarations: [AddVideoPage]
})
export class AddVideoPageModule {}
