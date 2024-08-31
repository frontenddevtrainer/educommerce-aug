import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { CreateCollectionPageComponent } from './pages/admin/create-collection-page/create-collection-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';

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
    canActivate: [authGuard],
  },
  {
    // /admin/create-collection
    path: 'admin/create-collection',
    component: CreateCollectionPageComponent,
    canActivate: [authGuard, adminGuard], // add adminguard here.
  },
  {
    path: 'holidays-summer',
    redirectTo: 'holidays',
  },
  {
    path: 'holidays-winter',
    redirectTo: 'holidays',
  },
  {
    path: 'holidays-2024',
    redirectTo: 'holidays',
  },
  {
    path: 'holidays',
    component: HolidaysComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
