import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shoppingCart: Array<Product>;

  constructor(private productService: ProductService) { 
   
  }

  ngOnInit() {
    this.productService.getShoppingCart(this.shoppingCart);
  }

}
