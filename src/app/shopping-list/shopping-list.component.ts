import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
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

  constructor(private myShoppingListService: ShoppingListService) {
  }

  ngOnInit() {    
    this.booksList = this.myShoppingListService.listItemsFirebase;
    console.log(this.mode);
  }
}
