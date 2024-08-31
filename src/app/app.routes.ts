import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { CreateCollectionPageComponent } from './pages/admin/create-collection-page/create-collection-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { Holidays2021Component } from './pages/holidays-2021/holidays-2021.component';
import { Holidays2022Component } from './pages/holidays-2022/holidays-2022.component';
import { Holidays2023Component } from './pages/holidays-2023/holidays-2023.component';
import { Holidays2024Component } from './pages/holidays-2024/holidays-2024.component';

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
    children: [
      {
        path: '2021',
        component: Holidays2021Component,
      },
      {
        path: '2022',
        component: Holidays2022Component,
      },
      {
        path: '2023',
        component: Holidays2023Component,
      },
      {
        path: '2024',
        component: Holidays2024Component,
      },
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
