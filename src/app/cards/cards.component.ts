import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  detail: any = {};
  table: any = [];
  constructor(
    private product: ProductservicesService,
    private routing: ActivatedRoute
  ) {}
  ngOnInit() {
    this.table = this.product.product;
    let productId = this.routing.snapshot.params['productid'];
    let b = '';
    let a = '';
    for (let i = 0; i < productId.length; i++) {
      if (productId[i] == ':') {
        a = a + productId[i]; // Exit the loop when ':' is encountered
      } else {
        b = b + productId[i]; // Concatenate character to b
      }
    }
    productId = +b;
    for (let item = 0; item < this.product.product.length; item++) {
      if (productId == this.product.product[item].id) {
        console.log(this.product.product[item]); // Log the matching product
        this.detail = this.product.product[item];
      }
    }

  }
}

