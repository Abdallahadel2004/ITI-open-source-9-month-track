import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.html',
  styles: ``,
})
export class ProductDetails implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productsService.getProductById(+id);
    }
  }
}
