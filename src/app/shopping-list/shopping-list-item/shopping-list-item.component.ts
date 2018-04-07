import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  //O nome da variável é listItem e o nome do parâmetro é item
  @Input("shoppingItem") private listItem: any;
  
  //É do componente, o objeto não vai ter essa variável
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) {    
   }

  //Hook para click de vida
  //Sempre que o componente for construído ou iniciado.
  ngOnInit() {
    // console.log(this.listItem);
  }

  public removeItem() {
    this.myShoppingListService.remove(this.listItem);
  }

  public crossItem(){
    //Ao invés de fazer o let, poderia copiar a variável TODO
    let itemEdited = { 
      key: this.listItem.key,
      name: this.listItem.name, 
      disabled: true }
    
    this.myShoppingListService.edit(itemEdited);
  }
}
