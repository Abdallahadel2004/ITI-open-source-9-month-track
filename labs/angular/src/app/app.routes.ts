import { Routes } from '@angular/router';
import { Home } from './Day5/home/home';
import { About } from './Day5/about/about';
import { Login } from './Day5/login/login';
import { NotFound } from './Day5/not-found/not-found';
import { DisplayProduct } from './Day5/products/display-product/display-product';
import { ProductDetails } from './Day5/products/product-details/product-details';
import { authGuard } from './Day5/guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {
        path: 'about',
        component: About,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: DisplayProduct },
            { path: 'products/:id', component: ProductDetails }
        ]
    },
    { path: 'login', component: Login },
    { path: '**', component: NotFound }
];
