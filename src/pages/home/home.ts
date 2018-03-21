import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subjects: any[];

  constructor(public navCtrl: NavController) {
    this.subjects = [
      {
        title: "Englisch",
        cardsCount: "14"
      },
      {
        title: "Französisch",
        cardsCount: "3"
      },
    ];
  }

  openSubject(subject) {
    alert('hello ' + subject.title);
  }
}
