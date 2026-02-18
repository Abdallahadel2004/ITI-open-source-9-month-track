import { Component, Input, Output, EventEmitter } from '@angular/core';

type Product = {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() product: Product = {
    name: '',
    price: 0,
    category: '',
  };

  @Output() favorite = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  onFavorite() {
    this.favorite.emit(this.product);
  }

  onDelete() {
    this.delete.emit(this.product);
  }
}
