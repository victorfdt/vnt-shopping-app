import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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

  public findAll(): Array<any> {
    return this.listItems;
  }

  public add(item){
    //A crase ativa o modulo de interpolação
    //=> forma sucinta de declarar funções
    this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item).subscribe(
      response => {console.log('deu certo')});
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
