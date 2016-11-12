import { Component } from '@angular/core';

import { InventoryTabPage } from '../inventory-tab/inventory-tab';
import { ShoppinglistTabPage } from '../shoppinglist-tab/shoppinglist-tab';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inventoryRoot: any = InventoryTabPage;
  shoppinglistRoot: any = ShoppinglistTabPage;

  constructor() {}

}
