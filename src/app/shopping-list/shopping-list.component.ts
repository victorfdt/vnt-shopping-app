import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public list: Observable<any[]>;

  private itemToAdd: string = '';
  
  constructor(private myShoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.list = this.myShoppingListService.listItemsFirebase;
  }

  private addObjectToList(){
    //Criar o objeto
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    }
    
    //Adicionar    
    this.myShoppingListService.add(newItem);

    this.itemToAdd = '';
  }

}
