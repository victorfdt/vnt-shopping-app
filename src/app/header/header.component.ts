import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Book } from '../Book';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private bookToSearch: string = "";
  

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  
}
