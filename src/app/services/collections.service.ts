import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
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

  $listing: BehaviorSubject<ICollection[] | null> = new BehaviorSubject<
    ICollection[] | null
  >([]);

  getCollections() {
    this._http
      .get<ICollection[]>(this._config.API_COLLECTIONS_URL)
      .pipe(
        tap((response: any) => {
          if (response.status !== 200) {
            console.log("API Error: Status not 200")
            throw new Error('status is not 200');
          }
        }),
        catchError((error) => {
          console.log(`API Error: ${error.message || error}`);
          return of(null);
        })
      )
      .subscribe((data) => {
        this.$listing.next(data);
      });
  }
}
