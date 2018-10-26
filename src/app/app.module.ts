import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { GrdFilterPipe } from './components/grd-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from '../services/players.service'; 



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
import { BioActivesComponent } from './components/players/bio-actives/bio-actives.component';
import{ PaginationPipe } from '../pipes/pagination.pipe';

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
    BioActivesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    HttpClientModule,
    // Ng2SmartTableModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
