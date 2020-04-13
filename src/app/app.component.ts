import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { products } from './products';
import { IProduct } from './models/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<IProduct>;
  productService: any;

  constructor(private ProductService: ProductService ) {
    
   }

  ngOnInit() {
    this.productService.getProducts(products);
  }
}
