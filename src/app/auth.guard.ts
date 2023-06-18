import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = localStorage.getItem('email')
    if (user && user!=='undefined'){
      // if there's a user, the route can be activated
      this.router.navigate(['/home']) // Redirect user to dashboard if already logged in
      return true;
    } else {
      // if no user, redirect to the homepage
      this.router.navigate(['/home'])
      return false
    }

  }

}
