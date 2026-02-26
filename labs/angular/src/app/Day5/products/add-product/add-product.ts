import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.html',
  styles: ``,
})
export class AddProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      description: ['']
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productsService.addProduct(this.productForm.value);
      this.productForm.reset();
    }
  }
}
