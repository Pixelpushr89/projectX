import { Component, OnInit, Input } from '@angular/core';

import { Pizza } from "../../../models/pizza.model";

@Component({
  selector: 'app-pizza-entry',
  templateUrl: './pizza-entry.component.html',
  styles: []
})
export class PizzaEntryComponent implements OnInit {
  @Input() pizza : Pizza;
  constructor() { }

  ngOnInit() {
  }

}
