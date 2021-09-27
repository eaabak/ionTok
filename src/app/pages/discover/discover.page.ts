import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
    hideIcon: boolean = false;
    options = {
        loop: true,
        autoplay: true
    }
    optionsTrends = {
        slidesPerView: 5,
        spaceBetween: 1,
        freeMode:true
    }
    trends = [{
        trendName: 'benimlehazirlan',
        viewCounts: '117.0M',
        trendProfiles: [{
            id: 0,
            photo: './assets/svg/res.jpg'
        }, {
            id: 1,
            photo: './assets/svg/res.jpg'
        }, {
            id: 2,
            photo: './assets/svg/res.jpg'
        }, {
            id: 3,
            photo: './assets/svg/res.jpg'
        }, {
            id: 4,
            photo: './assets/svg/res.jpg'
        }, {
            id: 5,
            photo: './assets/svg/res.jpg'
        }, {
            id: 6,
            photo: './assets/svg/res.jpg'
        }]
    },
        {
            trendName: 'okuladönüş',
            viewCounts: '340.0B',
            trendProfiles: [{
                id: 0,
                photo: './assets/svg/res.jpg'
            }, {
                id: 1,
                photo: './assets/svg/res.jpg'
            }, {
                id: 2,
                photo: './assets/svg/res.jpg'
            }, {
                id: 3,
                photo: './assets/svg/res.jpg'
            }, {
                id: 4,
                photo: './assets/svg/res.jpg'
            }, {
                id: 5,
                photo: './assets/svg/res.jpg'
            }, {
                id: 6,
                photo: './assets/svg/res.jpg'
            }, {
                id: 7,
                photo: './assets/svg/res.jpg'
            }]
        }]

    constructor() {
    }

    ngOnInit() {
    }

    onFocus(event: any) {
        this.hideIcon = true;
    }

    lossFocus(event: any) {
        this.hideIcon = false;
    }

}
