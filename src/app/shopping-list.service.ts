import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  //Injeção de dependências httpClient: HttpClient
  constructor(private httpClient: HttpClient) { 
    this.listItems =[{
      name: 'Bread',
      disabled: false
    },{
      name: 'Butter',
      disabled: false
    },{
      name: 'Coffee',
      disabled: false
    },{
      name: 'Cookies',
      disabled: true
    }];
  }

  //Observable é o retorno
  public findAll(): Observable<Object> {
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add(item): Observable<Object>{
    //A crase ativa o modulo de interpolação
    //=> forma sucinta de declarar funções
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public remove(item){
    let index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }

  public cross(item) {
    let index = this.listItems.indexOf(item);
    this.listItems[index].disabled = true;
  }

}
