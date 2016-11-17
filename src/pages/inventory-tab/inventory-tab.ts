// Angular imports
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Object imports
import { Productcategory } from '../../models/productcategory';
import { Product } from '../../models/product';

// Popover import
import { MorePopoverPage } from '../more-popover/more-popover';

@Component({
  selector: 'page-inventory-tab',
  templateUrl: 'inventory-tab.html',
})
export class InventoryTabPage {
  public inventory: Array<Productcategory>;
  public uncategorized_inventory: Array<Product>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.inventory = new Array<Productcategory>();
    this.uncategorized_inventory = new Array<Product>();

    // Insert test data
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
    let popover = this.popoverCtrl.create(MorePopoverPage)

    popover.onDidDismiss(data => {
      if(data != null) {
        switch(data.type) {
          case "newProductcategory":
            this.createProductcategory(data.data.Name);
            break;
        }
      }
    });

    popover.present({
      ev: event
    });
  }

  createProductcategory(productcategory_name: string) {
    this.inventory.push(new Productcategory(productcategory_name));
  }

  removeProductcategory(productcategory: Productcategory) {
    let removeProductcategoryAlert = this.alertCtrl.create({
      title: 'Produktkategorie löschen',
      message: 'Möchten Sie die ausgewählte Produktkategorie wirklich löschen?',
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: () => {
          }
        },
        {
          text: "Ja",
          handler: () => {
            if(productcategory.getProductList.length > 0) {
              let deleteProductsAlert = this.alertCtrl.create({
                title: "Produkte löschen",
                message: "Möchten Sie die Produkte in Ihrer Produktkategorie löschen?",
                buttons: [
                  {
                    text: "Nein",
                    handler: () => {
                      for(let i = 0; i < productcategory.getProductList.length; i++) {
                        this.uncategorized_inventory.push(productcategory.getProductList[i]);
                      }
                      for(let i = 0; i < this.inventory.length; i++) {
                        if(this.inventory[i] == productcategory) {
                          this.inventory.splice(i, 1);
                          break;
                        }
                      }
                    }
                  },
                  {
                    text: "Ja",
                    handler: () => {
                      productcategory.clear_product_list();
                      for(let i = 0; i < this.inventory.length; i++) {
                        if(this.inventory[i] == productcategory) {
                          this.inventory.splice(i, 1);
                          break;
                        }
                      }
                    }
                  }
                ]
              });
              deleteProductsAlert.present();
            } else {
              for(let i = 0; i < this.inventory.length; i++) {
                if(this.inventory[i] == productcategory) {
                  this.inventory.splice(i, 1);
                  break;
                }
              }
            }
          }
        }
      ]
    });
    removeProductcategoryAlert.present();
  }

  removeProductFromProductcategory(product: Product) {
    let removeProductAlert = this.alertCtrl.create({
      title: 'Produkt löschen',
      message: 'Möchten Sie das ausgewählte Produkt wirklich löschen?',
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: () => {
          }
        },
        {
          text: "Ja",
          handler: () => {
            for(let i = 0; i < this.inventory.length; i++) {
              if(product.getProductcategoryName == this.inventory[i].getProductcategoryName) {
                for(let j = 0; j < this.inventory[i].getProductList.length; j++) {
                  if(this.inventory[i].getProductList[j] == product) {
                    this.inventory[i].getProductList.splice(j, 1);
                    break;
                  }
                }
                break;
              }
            }
          }
        }
      ]
    });
    removeProductAlert.present();
  }

  removeProductFromUncategorized(product: Product) {
    let removeProductAlert = this.alertCtrl.create({
      title: 'Produkt löschen',
      message: 'Möchten Sie das ausgewählte Produkt wirklich löschen?',
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: () => {
          }
        },
        {
          text: "Ja",
          handler: () => {
            for(let i = 0; i < this.uncategorized_inventory.length; i++) {
              if(this.uncategorized_inventory[i] == product) {
                this.uncategorized_inventory.splice(i, 1);
                break;
              }
            }
          }
        }
      ]
    });
    removeProductAlert.present();
  }
}
