import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const pagesRoute: Routes = [
  { path: 'products', component: HomeComponent },
  {
    path: 'products/:id',
    loadChildren: () => import('./product-details/product-details.module').then(module => module.ProductDetailsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)
  },
  {
    path: 'cart/:id',
    loadChildren: () => import('./cart/cart.module').then(module => module.CartModule)
  }
];
