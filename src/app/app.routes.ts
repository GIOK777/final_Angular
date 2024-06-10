import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component'),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component'),
        title: 'About',
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component'),
        title: 'Contact',
      },
      {
        path: 'products',
        loadComponent: () => import('./features/products/products.component'),
        title: 'Products',
      },
      {
        path: '404',
        loadComponent: () => import('./features/notfound/notfound.component'),
        title: 'Not found',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '404',
      },
];
