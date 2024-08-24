import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  // Inject HTTP and call /products/:id

  constructor() {}

  getProductById(id: string) {
    // `/products/${id}`
    // return http get observable
  }
}
