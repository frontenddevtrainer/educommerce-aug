import { Injectable } from '@angular/core';

export interface ICollection {
  category: string;
  heading: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  constructor() {}

  collections: ICollection[] = [
    {
      category: 'Desk and Office',
      heading: 'New Laptops',
      image:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    },
    {
      category: 'Work and Fun',
      heading: 'New Laptops',
      image:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    },
    {
      category: 'Game Studio',
      heading: 'New Laptops',
      image:
        'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    },
  ];
}
