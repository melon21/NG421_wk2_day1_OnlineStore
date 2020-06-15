import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingCart: Array<IProduct>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.shoppingCart = this.productService.getShoppingCart();
  }

}
