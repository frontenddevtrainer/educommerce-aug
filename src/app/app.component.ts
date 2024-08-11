import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionsService } from './services/collections.service';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';

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
export class AppComponent implements OnInit {
  private _collectionService = inject(CollectionsService);
  private _postService = inject(PostsService)

  collectionList = this._collectionService.collections;

  yearlyProfit : number = 423420594327587.44234;
  yearlyProfitStr : string = "423,420,594,327,587.44"

  postListing : any[] = [];

  currentDate : Date = new Date();

  ngOnInit(): void {
    console.log("on init")
    this._postService.getPostsListing().subscribe((data)=>{
      console.log(data)
      this.postListing = data as unknown as any[];
    })
  }

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
