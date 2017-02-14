import { Component, OnInit } from '@angular/core';

import { Pizza } from "../../models/pizza.model";

@Component({
  selector: 'app-node-pizza-overview',
  templateUrl: './node-pizza-overview.component.html',
  styles: []
})
export class NodePizzaOverviewComponent implements OnInit {
  pizzaList : Pizza[] = [
    new Pizza('Pizza1', 'Sehr Lecker', 'https://thumb9.shutterstock.com/display_pic_with_logo/4441678/515926336/stock-vector-pizza-with-salami-sausage-mushrooms-onion-olives-tomatoes-slice-cartoon-flat-image-pizza-logo-515926336.jpg'),
    new Pizza('Pizza2', 'Sehr Lecker', 'http://us.123rf.com/450wm/juliazelenaya/juliazelenaya1604/juliazelenaya160400005/54563031-schinken-und-champignon-pizza-vektor-illustration-pizza-set-cartoon-stil-symbol-restaurant-men-illus.jpg?ver=6'),
  ]


  constructor() { }

  ngOnInit() {
  }

}
