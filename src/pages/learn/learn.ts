import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {
  subject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subject = navParams.get('subject');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

}
