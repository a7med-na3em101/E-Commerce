import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  arraycarts: any = [];
  detail: any[] = [];
  table: any = [];
  totalPrice: number = 0;

  constructor(
    private product: ProductservicesService,
    private routing: ActivatedRoute
  ) {}

  ngOnInit() {
    this.table = this.product.product;
    let productId = this.routing.snapshot.params['id'];
    let b = '';
    let a = '';
    for (let i = 0; i < productId.length; i++) {
      if (productId[i] == ':') {
        a = a + productId[i];
      } else {
        b = b + productId[i];
      }
    }
    productId = +b;
    console.log(productId);
    for (let item = 0; item < this.product.product.length; item++) {
      if (productId == this.product.product[item].id) {
        console.log(this.product.product[item]);
        localStorage.setItem(
          productId,
          JSON.stringify(this.product.product[item])
        );
      }

      const storedProduct = localStorage.getItem(String(item));
      if (storedProduct) {
        this.detail.push(JSON.parse(storedProduct));
      }
    }
    console.log(this.detail);

    // Calculate total price
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    // Reset total price
    this.totalPrice = 0;

    // Iterate through each product in the detail array and calculate total price
    this.detail.forEach((product) => {
      this.totalPrice += product.price;
    });
  }
}
