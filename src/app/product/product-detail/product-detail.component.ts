import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
import { products } from '../data/products';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  private subs = new SubSink();
  products: Product[] = products;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('test');
    this.subs.sink = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productId = params['id'];
        this.product = this.products.find(x => x.id == this.productId);
        console.log(this.product);
      }
    });
  }

}
