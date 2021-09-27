import {Component} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    isIconChange: boolean = false;
    isNotHome: boolean = false;

    constructor() {
    }

    tabClicked(e) {
        e.tab !== 'home' ? this.isIconChange = true : this.isIconChange = false;
        e.tab !== 'home' ? this.isNotHome = true : this.isNotHome = false;
    }
}
