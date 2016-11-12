import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ShoppinglistTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shoppinglist-tab',
  templateUrl: 'shoppinglist-tab.html'
})
export class ShoppinglistTabPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ShoppinglistTabPage Page');
  }

}
