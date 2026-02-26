import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Custom } from '../../directives/custom';
import { RouterModule } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';
import { AddProduct } from '../add-product/add-product';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [CommonModule, Custom, RouterModule, AddProduct],
  templateUrl: './display-product.html',
  styles: ``,
})
export class DisplayProduct {
  constructor(private productsService: ProductsService) { }

  get products(): Product[] {
    return this.productsService.getProducts();
  }
}
