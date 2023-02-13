import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {


  todos: Todos[] = [];
}
