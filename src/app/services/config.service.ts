import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_BASE_URL          = "http://localhost:5500";
  API_COLLECTIONS_URL   = `${this.API_BASE_URL}/collections`;
  API_PRODUCT_URL       = `${this.API_BASE_URL}/products`;

}
