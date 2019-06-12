import { Component, OnInit } from '@angular/core';

import {AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
    // console.log(this.isLogin);
    
  }

  closeMenu(){
    if( window.innerWidth < 1024 ){
      document.getElementById('btnMenu').click();
    }
  }

  onClickLogOut() {
    this.authService.logout();
    this.isLogin = false;


  }
}