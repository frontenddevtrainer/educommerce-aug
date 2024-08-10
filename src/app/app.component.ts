import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionsService } from './services/collections.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroBannerComponent,
    CollectionsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _collectionService = inject(CollectionsService);

  collectionList = this._collectionService.collections;

  yearlyProfit : number = 423420594327587.44234;
  yearlyProfitStr : string = "423,420,594,327,587.44"

  currentDate : Date = new Date();

  images: string[] = [
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
  ];

  summerImages: string[] = [
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
  ];

  buttonClickedForSummerCollection() {
    console.log('User has clicked the summer collection button');
  }
}
