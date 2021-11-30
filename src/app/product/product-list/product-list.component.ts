import { Component, OnInit } from '@angular/core';
import { products } from '../data/products';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
