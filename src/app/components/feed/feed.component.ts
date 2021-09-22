import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() video: any;

  option: AnimationOptions = {
    path: './assets/animations/music.json'
  };

  constructor() {
  }

  ngOnInit() {

  }

}
