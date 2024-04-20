import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
          let href = window.location.href;

          if (href.includes('?')) {
            let params = href.split('?');
            let lang = params[2].slice(0, -1);

            this.router.navigateByUrl('/gimmicks/auth/main?' + lang);
          } else {
            this.router.navigate(['/gimmicks/auth/main']);
          }
        }
      })
    );
  }
}
