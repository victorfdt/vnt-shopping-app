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

  //TODO eles devem ser private?
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

    this.book.name = this.bookName;
    this.book.author = this.author;
    this.book.quantity = this.quantity;
    this.book.price = this.price;

    //Adicionar    
    this.myShoppingListService.add(this.book);
  }

  private delete(book: Book) {
    this.myShoppingListService.delete(book);
  }

}
