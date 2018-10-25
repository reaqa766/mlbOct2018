import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent} from '../app/components/news/news.component';
import { AboutusComponent} from '../app/components/aboutus/aboutus.component';
import { RegisterComponent} from '../app/components/register/register.component';
import { ContactUsComponent} from '../app/components//contact-us/contact-us.component';
import { HomeComponent} from '../app/components/home/home.component';
import { BypositionComponent} from '../app/components/players/byposition/byposition.component';
import { ByteamComponent} from '../app/components/players/byteam/byteam.component';
import { DailyComponent} from '../app/components/players/daily/daily.component';
import { ActivesComponent} from '../app/components/players/actives/actives.component';
import { BioActivesComponent} from '../app/components/players/bio-actives/bio-actives.component';

const routes: Routes = [

  { path:'',
  component: HomeComponent},
  { path:'news',
  component: NewsComponent},
  { path:'aboutUs',
  component: AboutusComponent},
  { path:'register',
  component: RegisterComponent},
  { path:'position',
  component: BypositionComponent},
  { path:'team',
  component: ByteamComponent},
  { path:'daily',
  component: DailyComponent},
  { path:'actives',
  component: ActivesComponent},
  { path:'bioActives',
  component: BioActivesComponent},
  { path:'contactUs',
  component: ContactUsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
