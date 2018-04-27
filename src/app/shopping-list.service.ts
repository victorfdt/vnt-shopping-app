import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, AngularFireAction, AngularFireList } from 'angularfire2/database';
import { Book } from './Book';

@Injectable()
export class ShoppingListService {

  //Com o angularfire eu trabalho com Obervables e não com array
  public listItemsFirebase: Observable<any[]>;
  public myList: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  //Injeção de dependências private httpClient: HttpClient eprivate db: AngularFireDatabase
  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {

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

  public delete(item) {
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

  public findByName(name: string) {
   

  }


}
