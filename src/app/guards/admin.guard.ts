import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const allowAccess = !!window.sessionStorage.getItem('admin');

  if (allowAccess) {
    return true;
  } else {
    const router = inject(Router);
    router.navigateByUrl('/');
    return false;
  }
};
