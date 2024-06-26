import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class EditorAuthGuard implements CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  };


  constructor(private afAuth: AngularFireAuth, private router: Router) {}
 
  canActivateChild(
 
    next: ActivatedRouteSnapshot,
 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
    return this.afAuth.authState
 
       .take(1)
 
       .map(user => {
 
         return !!user;
 
       })
 
       .do(loggedIn => {
 
         if (!loggedIn) {
 
           this.router.navigate(['/auth/login'],  { queryParams: { next: state.url } } );
 
         }
 
     });
 
  }
 
}

