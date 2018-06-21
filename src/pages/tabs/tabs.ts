import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {ManageCardsPage} from "../manage-cards/manage-cards";
import {SettingsPage} from "../settings/settings";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ManageCardsPage;
    tab3Root = SettingsPage;

    constructor() {

    }
}
