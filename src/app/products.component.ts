import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A book';
  products = ['A book', 'A tree'];
  isDisable = true;
  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
  }
}
