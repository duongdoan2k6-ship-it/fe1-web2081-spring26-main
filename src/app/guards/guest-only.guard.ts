import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guestOnlyGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return inject(Router).createUrlTree(['/stories']);
  }

  return true;
};
