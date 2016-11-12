import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InventoryTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inventory-tab',
  templateUrl: 'inventory-tab.html'
})
export class InventoryTabPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InventoryTabPage Page');
  }

}
