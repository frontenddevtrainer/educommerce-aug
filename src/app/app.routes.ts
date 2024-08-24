import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { CreateCollectionPageComponent } from './pages/admin/create-collection-page/create-collection-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    // /
    path: '',
    component: HomepageComponent,
  },
  {
    // /products
    path: 'products',
    component: ProductspageComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailPageComponent,
  },
  {
    // /admin/create-collection
    path: 'admin/create-collection',
    component: CreateCollectionPageComponent,
    canActivate: [authGuard]
  },
];
