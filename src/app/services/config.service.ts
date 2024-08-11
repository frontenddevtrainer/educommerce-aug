import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_BASE_URL          = environment.base_api_url;
  API_COLLECTIONS_URL   = `${this.API_BASE_URL}/collections`;
  API_PRODUCT_URL       = `${this.API_BASE_URL}/products`;

}
