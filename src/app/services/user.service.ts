import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IUser {
  name: string;
  id: string;
  permissions: {
    [key: string]: { C: boolean; R: boolean; U: boolean; D: boolean };
  };
  accessToken: string;
}

type IUserSubject = IUser | null;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http = inject(HttpClient);

  user: BehaviorSubject<any> = new BehaviorSubject(null);

  logout() {}

  login() {
    // User ID =
  }

  whoiam() {
    const id = window.sessionStorage.getItem('id');

    if (!id) {
      return;
    }

    this._http.get(`http://localhost:5500/users/${id}`).subscribe((response) => {
      this.user.next(response);
    });
  }

  constructor() {}
}
