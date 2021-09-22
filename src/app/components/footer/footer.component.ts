import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Animation, AnimationController} from '@ionic/angular';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('animationImg', {read: ElementRef, static: true}) animationImg: ElementRef;
  @Input() video: any;

  option: AnimationOptions = {
    path: './assets/animations/music-fly.json'
  };

  constructor(private animationCtrl: AnimationController) {
  }

  ngOnInit() {
    const animation: Animation = this.animationCtrl.create()
      .addElement(this.animationImg.nativeElement)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');
    animation.play();

  }

}
