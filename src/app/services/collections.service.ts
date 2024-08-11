import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

export interface ICollection {
  category: string;
  heading: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  _http = inject(HttpClient);
  _config = inject(ConfigService);

  $listing: BehaviorSubject<ICollection[]> = new BehaviorSubject<ICollection[]>(
    []
  );

  getCollections() {
    this._http
      .get<ICollection[]>(this._config.API_COLLECTIONS_URL)
      .subscribe((data) => {
        this.$listing.next(data);
      });
  }
}
