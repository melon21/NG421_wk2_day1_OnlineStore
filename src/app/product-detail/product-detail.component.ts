import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {Input} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
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
