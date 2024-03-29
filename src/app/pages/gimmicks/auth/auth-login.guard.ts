import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.authService.authUser.pipe(
      take(1),
      map((authUser) => {
        return !authUser;
      }),
      tap((isNotAuth) => {
        if (!isNotAuth) {
          this.router.navigate(['/gimmicks/auth/main']);
        }
      })
    );
  }
}
