import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const allowAccess = window.sessionStorage.getItem("auth-token");

  if (allowAccess) {
    return true;
  } else {
    const router = inject(Router);
    router.navigateByUrl('/');
    return false;
  }
};
