import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  //O nome da variável é listItem e o nome do parâmetro é item
  @Input("shoppingItem") private listItem: any;

  constructor() { }

  //Hook para click de vida
  //Sempre que o componente for construído ou iniciado.
  ngOnInit() {
    console.log(this.listItem);
  }

}
