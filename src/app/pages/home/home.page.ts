import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    slideOpts = {
        direction: 'vertical'
    };
    videoList: any = [];

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.videoList = this.data.getVideoList();
    }

}
