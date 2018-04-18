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
  book: Book;
  bookName: string;
  author: string;
  quantity: number;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.books = this.myShoppingListService.listItemsFirebase;
  }

  private addBook() {
    //Criar o objeto
    /* TODO Por que nao posso fazer assim?
    this.book.name = this.bookName;
    this.book.author = this.author;
    this.book.quantity = this.quantity;
    */
    debugger;
    let newBook = {
      name: this.bookName,
      author: this.author,
      quantity: this.quantity
    }

    //Adicionar    
    this.myShoppingListService.add(newBook);
  }

}
