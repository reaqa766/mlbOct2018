import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/tap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
import { map, take, tap } from 'rxjs/operators';

import {AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../../app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.authService.authenticated) {
      return this.authService.currentUserObservable.pipe(
        take(1),
        map(user => {
            return !!user;
        }),
        tap( loggedIn => {
            if (!loggedIn) {
                this.router.navigate(['/login'])
            }
        })
    );
      }
  }
}
