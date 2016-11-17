import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {  
  FormBuilder,  
  FormGroup,  
  Validators,  
  AbstractControl  
} from '@angular/forms';
@Component({
  selector: 'page-more-popover',
  templateUrl: 'more-popover.html'
})
export class MorePopoverPage {

  callback: any;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, private params: NavParams ) {
    this.callback = this.params.get('callback');
  }

  public createAlertForNewProductcategory() {
    let productcategoryInput = this.alertCtrl.create({
      title: "Neue Produktkategorie",
      message: "Wie möchten Sie Ihre neue Produktkategorie nennen?",
      inputs: [
        {
          name: "Name",
          placeholder: "Produktkategoriename",
        }
      ],
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: data => {
            let callbackdata = {
              "type": "newProductcategory",
              "data": data
            }
            this.viewCtrl.dismiss(callbackdata);
          }
        },
        {
          text: "Ok",
          handler: data => {
            if(data.Name == "") {
              let wrongInputAlert = this.alertCtrl.create({
                title: "Fehlgeschlagen",
                message: "Bitte geben Sie einen Namen für Ihre Produktkategorie ein.",
                buttons: ["Ok"]
              });
              wrongInputAlert.present();
            } else {
              let callbackdata = {
              "type": "newProductcategory",
              "data": data
              }
              this.viewCtrl.dismiss(callbackdata);
            }
          }
        }
      ]
    });
    productcategoryInput.present();
  }
}
