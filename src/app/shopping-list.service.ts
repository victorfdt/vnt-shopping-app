import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  //Com o angularfire eu trabalho com Obervables e não com array
  public listItemsFirebase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  //Injeção de dependências private httpClient: HttpClient eprivate db: AngularFireDatabase
  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {
    // OLD this.listItemsRef = this.db.list('items');

    //TODO Esse é o nome do meu banco?
    this.listItemsRef = this.db.list('books');

    //snapshotChanges = fica observando as modificações feitas na lista
    this.listItemsFirebase = this.listItemsRef.snapshotChanges().map(
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
    this.listItemsRef.push(item);
  }

  public remove(item) {
    this.listItemsRef.remove(item.key);
  }

  //Remove todos os itens da lista
  public removeAll() {
    this.listItemsRef.remove();
  }

  public edit(item) {
    let key = item.key;

    //Removendo a propriedade key do item
    delete item.key;

    this.listItemsRef.update(key, item);
  }

  public find(item) {
    //TODO 
  }

}
