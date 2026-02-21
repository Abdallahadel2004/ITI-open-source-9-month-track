import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChildResponsiveForm, Product } from '../child-responsive-form/child-responsive-form';

@Component({
  selector: 'app-responsive-form',
  imports: [ReactiveFormsModule, ChildResponsiveForm],
  templateUrl: './responsive-form.html',
  styleUrl: './responsive-form.css',
})
export class ResponsiveForm {
  newProduct: Product | null = null;

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    category: new FormControl('', [Validators.required]),
  });

  addProduct() {
    if (this.productForm.valid) {
      this.newProduct = {
        name: this.productForm.value.name!,
        price: this.productForm.value.price!,
        category: this.productForm.value.category!,
      };
      this.productForm.reset();
    }
  }
}
