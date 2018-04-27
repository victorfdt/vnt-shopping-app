import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  //O nome da variável é selectedBook e o nome do parâmetro é item
  @Input("shoppingBook") private selectedBook: any;

  //É do componente, o objeto não vai ter essa variável
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) {
  }

  //Hook para click de vida
  //Sempre que o componente for construído ou iniciado.
  ngOnInit() {
    // console.log(this.selectedBook);
  }

  public deleteItem() {
    this.myShoppingListService.delete(this.selectedBook);
  }

  public crossItem() {
    //Ao invés de fazer o let, poderia copiar a variável TODO
    let itemEdited = {
      key: this.selectedBook.key,
      name: this.selectedBook.name,
      disabled: true
    }

    this.myShoppingListService.edit(itemEdited);
  }

  public addToCart(selectedBook) {
    let bookEdited = {
      key: this.selectedBook.key,
      name: this.selectedBook.name,
      price: this.selectedBook.price,
      quantity: this.selectedBook.price
    }

    console.log(bookEdited);
    //this.myShoppingListService.edit(bookEdited);

  }
}
