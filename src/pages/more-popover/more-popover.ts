import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the MorePopover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more-popover',
  templateUrl: 'more-popover.html'
})
export class MorePopoverPage {

  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
