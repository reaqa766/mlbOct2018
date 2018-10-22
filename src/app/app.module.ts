import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RegisterComponent } from './components/register/register.component';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
