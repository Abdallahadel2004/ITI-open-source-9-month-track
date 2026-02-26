import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Product[] = [
        { id: 1, name: 'iPhone 17 Pro Max', price: 86000, description: 'Apple flagship smartphone.' },
        { id: 2, name: 'Coffee Maker', price: 20000, description: 'Brews the perfect cup.' },
        { id: 3, name: 'MacBook Pro M3', price: 120000, description: 'Powerhouse for professionals.' },
        { id: 4, name: 'Sony WH-1000XM5', price: 15000, description: 'Noise cancelling headphones.' },
        { id: 5, name: 'Logitech MX Master 3S', price: 4500, description: 'Advanced wireless mouse.' },
    ];

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id == id);
    }

    addProduct(product: Partial<Product>) {
        const newProduct: Product = {
            id: this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1,
            name: product.name!,
            price: product.price!,
            description: product.description || ''
        };
        this.products.push(newProduct);
    }
}
