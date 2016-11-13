import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Productcategory } from '../../models/productcategory';
import { Product } from '../../models/product';


@Component({
  selector: 'page-inventory-tab',
  templateUrl: 'inventory-tab.html'
})
export class InventoryTabPage {

  inventory: Array<Productcategory>;

  constructor(public navCtrl: NavController) {
    this.inventory = new Array<Productcategory>();

    this.inventory.push(new Productcategory("Kühlschrank"));
    this.inventory.push(new Productcategory("Süßigkeitenschrank"));
    this.inventory.push(new Productcategory("Gefriertruhe"));

    this.inventory[0].add_product(new Product("12345", "Marmelade", "Kühlschrank", new Date()));
    this.inventory[0].add_product(new Product("67890", "Salami", "Kühlschrank", new Date()));

    this.inventory[1].add_product(new Product("1232222", "Schokolade", "Süßigkeitenschrank", new Date()));
    this.inventory[1].add_product(new Product("511313", "Skittles", "Süßigkeitenschrank", new Date()));
    this.inventory[1].add_product(new Product("5435241", "Smarties", "Süßigkeitenschrank", new Date()));

    this.inventory[2].add_product(new Product("00000", "Fisch", "Gefriertruhe", new Date()));


    console.log(this.inventory);
  }

}
