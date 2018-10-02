import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../app/services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from '../../app/models/item/item.module';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    this.shoppingList$ = this.shopping
    .getShoppingList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map( c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  }

}
