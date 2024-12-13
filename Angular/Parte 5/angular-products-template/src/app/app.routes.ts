import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'products', // Rutas con prefijo /products
    children: [
      {
        path: '',
        component: ProductsPageComponent,
        title: 'Productos | Angular Products',
      }, // products
      {
        path: 'add',
        component: ProductFormComponent,
        title: 'Añadir producto | Angular Products',
      }, // products/add
      { path: ':id', component: ProductDetailComponent }, // products/:id
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Aquí podríamos cargar un página de error 404 por ejemplo
  { path: '**', redirectTo: '/products' },
];
