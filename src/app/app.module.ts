import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { GrdFilterPipe } from './components/grd-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from '../services/players.service';

import { PagerService } from '../services/index';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { ByteamComponent } from './components/players/byteam/byteam.component';
import { BypositionComponent } from './components/players/byposition/byposition.component';
import { ActivesComponent } from './components/players/actives/actives.component';
import { NewsComponent } from './components/news/news.component';
import { SocialntwComponent } from './components/socialntw/socialntw.component';
import { DailyComponent } from './components/players/daily/daily.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BioActivesComponent } from './components/players/bio-actives/bio-actives.component';
import { PaginationPipe } from '../pipes/pagination.pipe';
import { PpalComponent } from './components/news/ppal/ppal.component';
import { PActivesComponent } from './components/pitchers/p-actives/p-actives.component';
import { PBioActivesComponent } from './components/pitchers/p-bio-actives/p-bio-actives.component';
import { PByteamComponent } from './components/pitchers/p-byteam/p-byteam.component';
import { PDailyComponent } from './components/pitchers/p-daily/p-daily.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { AuthService } from '../app/services/auth.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';

import {AuthGuard} from './guards/auth.guard';
import { NewsgralComponent } from './components/news/newsgral/newsgral.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    ByteamComponent,
    BypositionComponent,
    ActivesComponent,
    NewsComponent,
    SocialntwComponent,
    DailyComponent,
    AboutusComponent,
    MenuComponent,
    FooterComponent,
    ContactUsComponent,
    RegisterComponent,
    GrdFilterPipe,
    PaginationPipe,
    BioActivesComponent,
    PpalComponent,
    PActivesComponent,
    PBioActivesComponent,
    PByteamComponent,
    PDailyComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundPageComponent,
    NewsgralComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
    // Ng2SmartTableModule
  ],
  providers: [PlayersService, PagerService, AuthService, AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
