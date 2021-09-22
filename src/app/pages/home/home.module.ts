import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {FeedComponent} from "../../components/feed/feed.component";
import {LottieModule} from "ngx-lottie";
import {FooterComponent} from "../../components/footer/footer.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        LottieModule
    ],
  declarations: [HomePage, FeedComponent, FooterComponent]
})
export class HomePageModule {}
