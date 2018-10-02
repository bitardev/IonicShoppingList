import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../app/models/item/item.module';
import { ShoppingListService } from '../../app/services/shopping-list/shopping-list.service';
import { ToastService } from '../../app/services/toast/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService, private toastCtrl: ToastService) {
    this.item = this.navParams.get("item");
  }

  ionViewWillLoad() {
    // this.item = this.navParams.get("item");
  }
  SaveItem(item: Item){
    this.shopping.editItem(this.item).then(()=>{
      this.toastCtrl.show(`${item.name} Saved !`,);
      this.navCtrl.setRoot("HomePage");
    });
  }
  DeleteItem(item: Item){
    this.shopping.deleteItem(this.item).then(()=>{
      this.toastCtrl.show(`${item.name} Deleted !`,);
      this.navCtrl.setRoot("HomePage");      
    });
  }

}
