import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const allowAccess = window.sessionStorage.getItem("auth-token");
  const _user = inject(UserService);
  const { permissions } = _user.user.value;

  if (allowAccess) {
    return true;
  } else {
    const router = inject(Router);
    router.navigateByUrl('/');
    return false;
  }
};
