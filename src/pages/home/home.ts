import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LearnPage} from "../learn/learn";
import {VocolocoApiProvider} from "../../providers/vocoloco-api/vocoloco-api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subjects: any[];

  constructor(public navCtrl: NavController, private vocolocoApi: VocolocoApiProvider) {
    this.subjects = [
      {
        id: 1,
        title: "Englisch",
        cardsCount: "14"
      },
      {
        id: 1,
        title: "Französisch",
        cardsCount: "3"
      },
    ];
  }

  openSubject(subject) {
    this.navCtrl.push(LearnPage, {
      subject: subject
    });
  }

  ionViewWillEnter() {
    for (let subject of this.subjects) {
      if (!subject.data) {
        subject.data = this.vocolocoApi.getSubjectData(subject);
      }
    }
  }
}
