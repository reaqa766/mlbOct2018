import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { GrdFilterPipe } from './components/grd-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
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
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';

import {AuthGuard} from './guards/auth.guard';
import { NewsgralComponent } from './components/news/newsgral/newsgral.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { PitcherinfoComponent } from './components/pitcherinfo/pitcherinfo.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { PlayerOfTheWeekComponent } from './components/player-of-the-week/player-of-the-week.component';
import { PActives2019Component } from './components/temp2019/pitchers2019/p-actives2019/p-actives2019.component';
import { Byposition2019Component } from './components/temp2019/players2019/byposition2019/byposition2019.component';
import { Byteam2019Component } from './components/temp2019/players2019/byteam2019/byteam2019.component';
import { Actives2019Component } from './components/temp2019/players2019/actives2019/actives2019.component';
import { Playerinfo2019Component } from './components/temp2019/players2019/playerinfo2019/playerinfo2019.component';
import { PBioActives2019Component } from './components/temp2019/pitchers2019/p-bio-actives2019/p-bio-actives2019.component';
import { PByteam2019Component } from './components/temp2019/pitchers2019/p-byteam2019/p-byteam2019.component';
import { Pitcherinfo2019Component } from './components/temp2019/pitchers2019/pitcherinfo2019/pitcherinfo2019.component';
import { BioActives2019Component } from './components/temp2019/players2019/bio-actives2019/bio-actives2019.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostDashboardComponent } from './components/posts/post-dashboard/post-dashboard.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { PostListsComponent } from './components/posts/post-lists/post-lists.component';
import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';
import { PlayerWeekComponent } from './components/player-week/player-week.component';
import { PitcherrWeekComponent } from './components/pitcherr-week/pitcherr-week.component';
import { PositionComponent } from './components/players/byposition/position/position.component';
import { PruebajsonsComponent } from './components/prueba/pruebajsons/pruebajsons.component';
import { LideresComponent } from './components/lideres/lideres.component';
import { LideresPitchersComponent } from './components/lideres/lideres-pitchers/lideres-pitchers.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { PitchersDayAntComponent } from './components/pitchers/pitchers-day-ant/pitchers-day-ant.component';
import { ResultadosTeamsComponent } from './components/resultados-teams/resultados-teams.component';
import { ResultadosTeamsAyerComponent } from './components/resultados-teams-ayer/resultados-teams-ayer.component';
import { LetrasComponent } from './components/letras/letras.component';
import { JugEquipVzlaComponent } from './components/jug-equip-vzla/jug-equip-vzla.component';
import { EstadoVzlaComponent } from './components/estado-vzla/estado-vzla.component';
import { NovatosComponent } from './components/players/novatos/novatos.component';
import { QuepasohoyComponent } from './components/players/quepasohoy/quepasohoy.component';
import { TransaccionesComponent } from './components/players/transacciones/transacciones.component';

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
    NewsgralComponent,
    PlayerinfoComponent,
    PitcherinfoComponent,
    TriviaComponent,
    HeaderComponent,
    VideosComponent,
    PlayerOfTheWeekComponent,
    PActives2019Component,
    Byposition2019Component,
    Byteam2019Component,
    Actives2019Component,
    Playerinfo2019Component,
    PBioActives2019Component,
    PByteam2019Component,
    Pitcherinfo2019Component,
    BioActives2019Component,
    PostListComponent,
    PostDetailComponent,
    PostDashboardComponent,
    AuthComponent,
    PostListsComponent,
    InfogShowComponent,
    PlayerWeekComponent,
    PitcherrWeekComponent,
    PositionComponent,
    PruebajsonsComponent,
    LideresComponent,
    LideresPitchersComponent,
    PosicionesComponent,
    PitchersDayAntComponent,
    ResultadosTeamsComponent,
    ResultadosTeamsAyerComponent,
    LetrasComponent,
    JugEquipVzlaComponent,
    EstadoVzlaComponent,
    NovatosComponent,
    QuepasohoyComponent,
    TransaccionesComponent

  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'mlbOct2018' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFireDatabaseModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [PlayersService, PagerService, AngularFirestore, AuthService, AuthGuard, FlashMessagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
