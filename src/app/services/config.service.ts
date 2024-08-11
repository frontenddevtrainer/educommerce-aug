import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  POSTS_URL: string = 'https://jsonplaceholder.typicode.com/posts';
}
