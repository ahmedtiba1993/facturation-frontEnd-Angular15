import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('accessToken')) {
      //verifier si le access token est valid
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    return new Promise((resolve, rejected) => {
      if (this.userService.validateJwtToken() == true) {
        resolve(true);
      } else {
        this.router.navigate(['login'], {
          queryParams: { returnUrl: state.url },
        });
        resolve(false);
      }
    });
  }
}
