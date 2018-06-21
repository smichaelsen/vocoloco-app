import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LearnPage} from "../pages/learn/learn";
import {VocolocoApiProvider} from '../providers/vocoloco-api/vocoloco-api';
import {ManageCardsPage} from "../pages/manage-cards/manage-cards";
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
    declarations: [
        MyApp,
        ManageCardsPage,
        SettingsPage,
        HomePage,
        TabsPage,
        LearnPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ManageCardsPage,
        SettingsPage,
        HomePage,
        TabsPage,
        LearnPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        VocolocoApiProvider
    ]
})
export class AppModule {
}
