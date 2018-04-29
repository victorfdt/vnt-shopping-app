import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingCartServiceService {

  public cartFirebase: Observable<any[]>;
  private cartRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.cartRef = this.db.list('cart');

    //snapshotChanges = fica observando as modificações feitas na lista
    this.cartFirebase = this.cartRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
          console.log(c.payload.val());
          return {
            key: c.payload.key,
            name: c.payload.val()['name'],
            author: c.payload.val()['author'],
            quantity: c.payload.val()['quantity'],
            price: c.payload.val()['price']
          }
        }
        ).reverse();
      }
    );
  }

  public add(item) {
    this.cartRef.push(item);
  }

  public delete(item) {
    this.cartRef.remove(item.key);
  }

  //Remove todos os itens da lista
  public removeAll() {
    this.cartRef.remove();
  }

}
