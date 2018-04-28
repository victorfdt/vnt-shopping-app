import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  //O nome da variável é selectedBook e o nome do parâmetro é item
<<<<<<< HEAD
  @Input("bookRow") book: any;
  @Input("mode") mode: string;
  //@Input() bookRow: any;
=======
  @Input("shoppingBook") private selectedBook: any;
>>>>>>> 412c8e23b033aed1209a31dd761a83fbbc1d4e3b

  //É do componente, o objeto não vai ter essa variável
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) {
  }

  //Hook para click de vida
  //Sempre que o componente for construído ou iniciado.
  ngOnInit() {
  }

  public deleteItem() {
    this.myShoppingListService.delete(this.book);
  }

  public crossItem() {
    //Ao invés de fazer o let, poderia copiar a variável TODO
    let itemEdited = {
<<<<<<< HEAD
      key: this.book.key,
      name: this.book.name,
=======
      key: this.selectedBook.key,
      name: this.selectedBook.name,
>>>>>>> 412c8e23b033aed1209a31dd761a83fbbc1d4e3b
      disabled: true
    }

    this.myShoppingListService.edit(itemEdited);
  }

<<<<<<< HEAD
  public addToCart(book) {
    let bookEdited = {
      key: this.book.key,
      name: this.book.name,
      price: this.book.price,
      quantity: this.book.price
=======
  public addToCart(selectedBook) {
    let bookEdited = {
      key: this.selectedBook.key,
      name: this.selectedBook.name,
      price: this.selectedBook.price,
      quantity: this.selectedBook.price
>>>>>>> 412c8e23b033aed1209a31dd761a83fbbc1d4e3b
    }

    console.log(bookEdited);
    //this.myShoppingListService.edit(bookEdited);

  }
}
