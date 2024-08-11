import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { CreateCollectionPageComponent } from './pages/admin/create-collection-page/create-collection-page.component';

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
    // /admin/create-collection
    path: 'admin/create-collection',
    component: CreateCollectionPageComponent,
  },
];
