import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product: IProduct;
  productAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {

  }
  onProductAdded(): void{
    this.productAdded.emit(this.product);
    console.log('onProductAdded');
  }
}