import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public list: Array<any>;

  private itemToAdd: string = '';

  constructor(private myShoppingListService: ShoppingListService) {    
  }

  ngOnInit() {
    //Isso agora retorna um Observable
    //Object.keys = retorna o nome de todas as propriedades de um objeto
    //map é uma função que passa item a item e faz alguma coisa com o valor
    //Essa abordagem é necessária porque o firebase não trabalha com array, só com objeto
    this.myShoppingListService.findAll().subscribe(
      response => {
        if(response) {
          this.list = Object.keys(response).map(id => {
            let item: any = response[id];
            item.key = id;
            return item;
          })
        } else {
          this.list = [];
        }
      },
      error => { console.log(error) }
    )

    console.log(this.list);
  }

  private addObjectToList(){
    //Criar o objeto
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    }

    //Adicionar
    this.myShoppingListService.add(newItem).subscribe(
      response => {
        console.log(response);
        newItem['key'] = response['name'];
        this.list.unshift(newItem); 
      },
      error => { console.error('Erro'); }
    );
    this.itemToAdd = '';
  }

}
