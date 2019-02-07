import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  authState: any = null

  constructor (public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
   }

  // loginTwitter () {
  //   return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
  // }

  // loginFacebook() {
  //   return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  // }

  // loginGoogle() {
  //   return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  // }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): boolean {
    // return this.afAuth !== null;
    return this.authState !== null
  }
  get currentUserObservable(): any {
    return this.afAuth.authState;
}
  get currentUserId(): string {
  return this.authenticated ? this.authState.uid : null
}
login() {
  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}


}