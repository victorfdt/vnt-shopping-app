import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../Book';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input("mode") mode: string;
  bookRow: Book;

  public booksList: Observable<any[]>;

  constructor(
    private myShoppingListService: ShoppingListService,
    private myShoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.booksList = this.myShoppingListService.listItemsFirebase;
    console.log(this.mode);
  }

  public addToCart(book: Book) {

    /** When adding a book in the shopping cart, I need to subtract
     * a book from the store.
     */
    var bookToCart = book;
    var  bookToStore = book;
    var oldQuantity = bookToStore.quantity;

    //Adding the book in the cart
    this.booksList;
    bookToCart.quantity = 1;
    
    this.myShoppingCartService.add(bookToCart);

    //Updating the book in the store
    bookToStore.quantity = oldQuantity - 1;
    this.myShoppingListService.edit(bookToStore);
  }
}
