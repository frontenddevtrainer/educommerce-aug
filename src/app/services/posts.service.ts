import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _http = inject(HttpClient);
  private _config = inject(ConfigService)

  constructor() { }

  getPostsListing(){
    return this._http.get(this._config.POSTS_URL)
  }
}
