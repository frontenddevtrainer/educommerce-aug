import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { IProduct } from '../pages/product-detail-page/product-detail-page.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  _http = inject(HttpClient);
  _config = inject(ConfigService);

  constructor() {}

  getProductById(id: string) {
    return this._http.get<IProduct>(`${this._config.API_PRODUCT_URL}/${id}`).subscribe((data)=>{})
  }
}
