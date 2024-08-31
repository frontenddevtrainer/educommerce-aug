import { Component, inject, OnInit } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { CommonModule } from '@angular/common';
import { CollectionsService } from '../../services/collections.service';
import { RegisterUserComponent } from '../../components/forms/register-user/register-user.component';
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'edu-homepage',
  standalone: true,
  imports: [
    CommonModule,
    HeroBannerComponent,
    CollectionsComponent,
    RegisterUserComponent,
    LoginFormComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  private _collectionService = inject(CollectionsService);
  private _user = inject(UserService);

  homepagePermissons: any = {};

  $listing = this._collectionService.$listing;

  ngOnInit(): void {
    this._collectionService.getCollections();

    this._user.user.subscribe(({ permissions }) => {
      this.homepagePermissons = permissions?.homepage;
    });
  }

  yearlyProfit: number = 423420594327587.44234;
  yearlyProfitStr: string = '423,420,594,327,587.44';

  postListing: any[] = [];

  currentDate: Date = new Date();

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
