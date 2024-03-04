import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const toast = inject(NgToastService);

    if (auth.isLoggedIn()) {
      return true;
    } else {
      auth.mensagem('Usuario não foi autenticado ainda!');
      auth.router.navigate(['login']);
      return false;
    }


};
