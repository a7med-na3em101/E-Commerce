import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'], // Use styleUrls instead of styleUrl
})
export class CategoryComponent implements OnInit {
  table: any[] = [];
  productsSlice: any[] = [];

  constructor(private product: ProductservicesService) {}

  ngOnInit() {
    this.getproduct();
  }

  getproduct() {
    this.table = this.product.product;
    this.productsSlice = [...this.table]; // Initialize productsSlice with table data
  }

  sortUp(): void {
    this.productsSlice.sort((a, b) => a.price - b.price); // Sort ascending by price
  }

  sortDown(): void {
    this.productsSlice.sort((a, b) => b.price - a.price); // Sort descending by price
  }

  default(): void {
    this.productsSlice = [...this.table]; // Reset productsSlice to the original table data
  }


  onSearch(event: any) {
    const query = event.target.value;
    this.filterBySearch(query);
  }

  filterBySearch(query: string) {
    if (query.trim() === '') {
      // If the search query is empty, show all products
      this.productsSlice = [...this.table];
    } else {
      // Filter products based on the search query
      this.productsSlice = this.product.product.filter((el) =>
        el.category.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }



}
