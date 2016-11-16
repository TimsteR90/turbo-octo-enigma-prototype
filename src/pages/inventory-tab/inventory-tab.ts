import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { Productcategory } from '../../models/productcategory';
import { Product } from '../../models/product';
import { MorePopoverPage } from '../more-popover/more-popover';


@Component({
  selector: 'page-inventory-tab',
  templateUrl: 'inventory-tab.html',
})
export class InventoryTabPage {

  inventory: Array<Productcategory>;
  uncategorized_inventory: Array<Product>;


  constructor(public navCtrl: NavController, public popoverController: PopoverController) {
    this.inventory = new Array<Productcategory>();
    this.uncategorized_inventory = new Array<Product>();

    this.inventory.push(new Productcategory("Kühlschrank"));
    this.inventory.push(new Productcategory("Süßigkeitenschrank"));
    this.inventory.push(new Productcategory("Gefriertruhe"));

    this.inventory[0].add_product(new Product("12345", "Marmelade", "Kühlschrank", new Date()));
    this.inventory[0].add_product(new Product("67890", "Salami", "Kühlschrank", new Date()));

    this.inventory[1].add_product(new Product("1232222", "Schokolade", "Süßigkeitenschrank", new Date()));
    this.inventory[1].add_product(new Product("511313", "Skittles", "Süßigkeitenschrank", new Date()));
    this.inventory[1].add_product(new Product("5435241", "Smarties", "Süßigkeitenschrank", new Date()));

    this.inventory[2].add_product(new Product("00000", "Fisch", "Gefriertruhe", new Date()));
    this.inventory[2].add_product(new Product("11313", "Teest2", "Gefriertruhe", new Date()));
    this.inventory[2].add_product(new Product("1", "Test1", "Gefriertruhe", new Date()));
    this.inventory[2].add_product(new Product("2", "Test", "Gefriertruhe", new Date()));
    this.inventory[2].add_product(new Product("2", "Wäää", "Gefriertruhe", new Date()));

    this.uncategorized_inventory.push(new Product("2", "Wäää", "Gefriertruhe", new Date()));
    console.log(this.inventory);
  }

  /**
   * Show Popover
   */
  showMore(event) {
    let popover = this.popoverController.create(MorePopoverPage);
    popover.present({
      ev: event
    });
  }

}
