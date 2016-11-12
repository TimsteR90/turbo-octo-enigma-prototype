import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { InventoryTabPage } from '../pages/inventory-tab/inventory-tab';
import { ShoppinglistTabPage } from '../pages/shoppinglist-tab/shoppinglist-tab'; 

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InventoryTabPage,
    ShoppinglistTabPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InventoryTabPage,
    ShoppinglistTabPage
  ],
  providers: []
})
export class AppModule {}
