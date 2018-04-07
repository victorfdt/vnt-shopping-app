import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {
  
  private listItems: Array<any>;

  //Com o angularfire eu trabalho com Obervables e não com array
  public listItemsFirebase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  //Injeção de dependências private httpClient: HttpClient eprivate db: AngularFireDatabase
  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) { 
    this.listItems =[];
    this.listItemsRef = this.db.list('items');

    //snapshotChanges = fica observando as modificações feitas na lista
    this.listItemsFirebase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map( c => {
            console.log(c.payload.val());
            return {
              key: c.payload.key,
              name: c.payload.val()['name'],
              disabled: c.payload.val()['disabled'],
            }
          }
        ).reverse();
      }
    );
  }

  public add(item){
    this.listItemsRef.push(item);
  }

  public remove(item){
    return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
  }

  public edit(item) {
    let key = item.key;

    //Removendo a propriedade key do item
    delete item.key;

    //Também posso usar o verbo put
    return this.httpClient.patch(`${environment.firebase.databaseURL}/items/${key}.json`, item);
  }

}
