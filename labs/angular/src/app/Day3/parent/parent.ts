import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

type Product = {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-parent',
  imports: [FormsModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  products: Product[] = [
    { name: 'iPhone 17 Pro Max', price: 86000, category: 'Eletronics' },
    { name: 'Coffee Maker', price: 20000, category: 'Kitchen' },
  ];

  favoriteProduct: Product | null = null;
  newName = '';
  newPrice: number | null = null;
  newCategory = '';

  addProduct() {
    if (this.newName && this.newPrice && this.newCategory) {
      this.products.push({
        name: this.newName,
        price: this.newPrice,
        category: this.newCategory,
      });
      this.newName = '';
      this.newPrice = null;
      this.newCategory = '';
    }
  }

  onFavorite(product: Product) {
    this.favoriteProduct = product;
  }

  onDelete(product: Product) {
    this.products = this.products.filter(p => p !== product);
    if (this.favoriteProduct === product) {
      this.favoriteProduct = null;
    }
  }
}
