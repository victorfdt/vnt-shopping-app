import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { ShoppingCartService } from '../../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../Book';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public books: Observable<any[]>;
  public totalPrice: number = 10;

  book: Book = new Book;
  bookName: string;
  author: string;
  quantity: number;
  price: number;

  constructor(
    private myShoppingListService: ShoppingListService,
    private myShoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.books = this.myShoppingCartService.cartFirebase;
    console.log(this.books);
  }

  public removeBook(book: Book) {
    this.myShoppingCartService.delete(book);
  }

  public sumTotalPrice(price: number) {
    this.totalPrice = this.totalPrice + price;
  }
}