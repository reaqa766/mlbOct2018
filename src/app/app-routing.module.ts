import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent} from '../app/components/news/news.component';
import { AboutusComponent} from '../app/components/aboutus/aboutus.component';
// import { RegisterComponent} from '../app/components/register/register.component';
import { ContactUsComponent} from '../app/components//contact-us/contact-us.component';
import { HomeComponent} from '../app/components/home/home.component';
import { BypositionComponent} from '../app/components/players/byposition/byposition.component';
import { ByteamComponent} from '../app/components/players/byteam/byteam.component';
import { DailyComponent} from '../app/components/players/daily/daily.component';
import { ActivesComponent} from '../app/components/players/actives/actives.component';
import { BioActivesComponent} from '../app/components/players/bio-actives/bio-actives.component';
import { PpalComponent} from '../app/components/news/ppal/ppal.component';
import { PDailyComponent} from '../app/components/pitchers/p-daily/p-daily.component';
import { PByteamComponent } from './components/pitchers/p-byteam/p-byteam.component';
import { PBioActivesComponent } from './components/pitchers/p-bio-actives/p-bio-actives.component';
import { PActivesComponent } from './components/pitchers/p-actives/p-actives.component';
import { LoginComponent } from './components/user/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RegisterComponent } from './components/user/register/register.component';


const routes: Routes = [

  { path: '',
  component: HomeComponent},
  { path: 'news',
  component: NewsComponent},
  { path: 'aboutUs',
  component: AboutusComponent},
  { path: 'register',
  component: RegisterComponent},
  { path: 'position',
  component: BypositionComponent},
  { path: 'team',
  component: ByteamComponent},
  { path: 'daily',
  component: DailyComponent},
  { path: 'actives',
  component: ActivesComponent},
  { path: 'bioActives',
  component: BioActivesComponent},
  { path: 'contactUs',
  component: ContactUsComponent},
  { path: 'news_ppal',
  component: PpalComponent},
  { path: 'p_daily',
  component: PDailyComponent},
  { path: 'p_byteam',
  component: PByteamComponent},
  { path: 'p_bio',
  component: PBioActivesComponent},
  { path: 'p_actives',
  component: PActivesComponent},
  { path: 'login',
  component: LoginComponent}
  { path: '**',
  component: NotFoundPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
