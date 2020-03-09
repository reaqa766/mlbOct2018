import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../../services/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
// import firebase = require('firebase');
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // onSubmitLogin() {
  //   this.authService.loginEmail(this.email, this.password)
  //   .then( (res) => {
  //     this.router.navigate(['/bioActives']);
  //   }).catch((err) => {
  //     this.router.navigate(['/login']);
  //   });
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
<<<<<<< HEAD
      this.flashMensaje.show('Usuario logeado correctamente.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/news_ppal']);
      console.log('login');
      
=======
      this.router.navigate(['/trivia']);

>>>>>>> 1069880020778d9ca4432f01ff3f707c35c15170
    }).catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
      console.log('login');

    });
  }
  async resetPassword(email:any){
      var auth = firebase.auth();
      try {
      await auth.sendPasswordResetEmail(email);
      return this.flashMensaje.show('Email enviado.', { cssClass: 'alert-success', timeout: 4000 });
    }
    catch (error) {
      this.flashMensaje.show(error.message, { cssClass: 'alert-danger', timeout: 6000 });
    }
 }}
