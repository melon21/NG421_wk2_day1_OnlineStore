import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {Input} from '@angular/core';
import { products } from '../products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productWasAdded(product:Product)
  {
    addToCart(ProductService);
  }
@Input() 
price: string;
name: string;
description: string;
reviews: number;
rating: number;
  constructor() {

   }

  ngOnInit() {
  }

}
