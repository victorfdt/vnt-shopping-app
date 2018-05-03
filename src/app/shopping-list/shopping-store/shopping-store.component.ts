import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../Book';

@Component({
  selector: 'app-shopping-store',
  templateUrl: './shopping-store.component.html',
  styleUrls: ['./shopping-store.component.css']
})
export class ShoppingStoreComponent implements OnInit {

  public books: Observable<any[]>;

  book: Book = new Book;
  bookName: string;
  author: string;
  quantity: number;
  price: number;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.books = this.myShoppingListService.listItemsFirebase;
  }

  private add() {
    console.log(this.price);
    this.book.name = this.bookName;
    this.book.author = this.author;
    this.book.quantity = this.quantity;
    this.book.price = this.price;

    //Creating a new book  
    this.myShoppingListService.create(this.book);
  }

  public removeBook(book: Book) {
    this.myShoppingListService.delete(book);
  }

}
