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
      if (this.authService.authenticated) 

      return this.authService.currentUserObservable.pipe(
        take(1),
        map(user => {
            console.log('user: ', user);
            return !!user
        }),
        tap( loggedIn => {
            console.log("loggedIn: ", loggedIn);
            if (!loggedIn) {
                console.log("access denied");
                this.router.navigate(['/login']);
            }
        })
    );
   }

  

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.afAuth.authState
  //     .take(1)
  //     .map(authState => !! authState)
  //     .pipe(tap())( authenticated => {
  //       if (!authenticated) {
  //         this.router.navigate(['/login']);
  //       }
  //     });
  // }
}
