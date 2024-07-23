import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  table: any[] = [];

  constructor(
    private product: ProductservicesService,

  ) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.table = this.product.product;
  }

}

