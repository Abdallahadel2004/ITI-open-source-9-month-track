import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

export type Product = {
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-child-responsive-form',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './child-responsive-form.html',
  styles: ``
})
export class ChildResponsiveForm implements OnInit, OnChanges {
  @Input() newProduct: Product | null = null;

  products: Product[] = [
    { name: 'iPhone 17 Pro Max', price: 86000, category: 'Electronics' },
    { name: 'Coffee Maker', price: 20000, category: 'Kitchen' },
  ];
  favoriteProduct: Product | null = null;

  editing = false;
  editIndex = -1;
  editName = '';
  editPrice = 0;
  editCategory = '';

  ngOnInit(): void {
    console.log('ngOnInit: ChildResponsiveForm initialized with', this.products.length, 'products');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newProduct'] && this.newProduct) {
      console.log('ngOnChanges: New product received →', this.newProduct);
      this.products.push(this.newProduct);
    }
  }

  onDelete(product: Product) {
    this.products = this.products.filter((p) => p !== product);
    if (this.favoriteProduct === product) {
      this.favoriteProduct = null;
    }
  }

  onFavorite(product: Product) {
    this.favoriteProduct = product;
  }

  startEdit(index: number) {
    this.editing = true;
    this.editIndex = index;
    this.editName = this.products[index].name;
    this.editPrice = this.products[index].price;
    this.editCategory = this.products[index].category;
  }

  cancelEdit() {
    this.editing = false;
    this.editIndex = -1;
  }

  saveEdit() {
    if (this.editIndex !== -1) {
      this.products[this.editIndex] = {
        name: this.editName,
        price: this.editPrice,
        category: this.editCategory,
      };
    }
    this.editing = false;
    this.editIndex = -1;
  }
}
