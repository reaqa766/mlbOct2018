import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorAuthGuard } from '../app/components/guards/editor-auth.guard.guard';

import {AuthComponent} from '../app/components/auth/auth/auth.component';

import { NewsComponent} from '../app/components/news/news.component';
import { AboutusComponent} from '../app/components/aboutus/aboutus.component';
// import { RegisterComponent} from '../app/components/register/register.component';
import { ContactUsComponent} from '../app/components//contact-us/contact-us.component';
import { HomeComponent} from '../app/components/home/home.component';
import { BypositionComponent} from '../app/components/players/byposition/byposition.component';
import { ByteamComponent} from '../app/components/players/byteam/byteam.component';
import { PlayersComponent} from '../app/components/players/players.component';
import { DailyComponent} from '../app/components/players/daily/daily.component';
import { ActivesComponent} from '../app/components/players/actives/actives.component';
import { BioActivesComponent} from '../app/components/players/bio-actives/bio-actives.component';
import { PpalComponent} from '../app/components/news/ppal/ppal.component';
import { PDailyComponent} from '../app/components/pitchers/p-daily/p-daily.component';
import { PByteamComponent } from './components/pitchers/p-byteam/p-byteam.component';
import { PBioActivesComponent } from './components/pitchers/p-bio-actives/p-bio-actives.component';
import { PitchersFtsyComponent } from '../app/components/temp2019/pitchers2019/pitchers-ftsy/pitchers-ftsy.component';
import { PitchersVzlaFtsyComponent } from '../app/components/temp2019/pitchers2019/pitchers-vzla-ftsy/pitchers-vzla-ftsy.component';
import { PActivesComponent } from './components/pitchers/p-actives/p-actives.component';
import { LoginComponent } from './components/user/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NewsgralComponent } from './components/news/newsgral/newsgral.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { PitcherinfoComponent } from './components/pitcherinfo/pitcherinfo.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { VideosComponent } from './components/videos/videos.component';
import { PActives2019Component } from './components/temp2019/pitchers2019/p-actives2019/p-actives2019.component';
import { Actives2019Component } from './components/temp2019/players2019/actives2019/actives2019.component';
import { BioActives2019Component } from './components/temp2019/players2019/bio-actives2019/bio-actives2019.component';
import { Byposition2019Component } from './components/temp2019/players2019/byposition2019/byposition2019.component';
import { PlayerInfoDominicanComponent } from './components/playerinfo/player-info-dominican/player-info-dominican.component';
import { Playerinfo2019Component } from './components/temp2019/players2019/playerinfo2019/playerinfo2019.component';
import { Byteam2019Component } from './components/temp2019/players2019/byteam2019/byteam2019.component';
import { Pitcherinfo2019Component } from './components/temp2019/pitchers2019/pitcherinfo2019/pitcherinfo2019.component';
import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';
import { TablaComponent } from './components/quiniela/tabla/tabla.component';
import { PlayerWeekComponent } from './components/player-week/player-week.component';
import { PitcherrWeekComponent } from './components/pitcherr-week/pitcherr-week.component';
import { PlayerOfTheWeekComponent } from './components/player-of-the-week/player-of-the-week.component';
import { PitchersDayAntComponent } from './components/pitchers/pitchers-day-ant/pitchers-day-ant.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';

import { PruebajsonsComponent } from './components/prueba/pruebajsons/pruebajsons.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
// import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { LideresComponent } from './components/lideres/lideres.component';
import { ResultadosTeamsComponent } from './components/resultados-teams/resultados-teams.component';
import { ResultadosTeamsAyerComponent  } from './components/resultados-teams-ayer/resultados-teams-ayer.component';
import { LetrasComponent  } from './components/letras/letras.component';
import { JugEquipVzlaComponent  } from './components/jug-equip-vzla/jug-equip-vzla.component';
import { EstadoVzlaComponent  } from './components/estado-vzla/estado-vzla.component';
import { NovatosComponent  } from './components/players/novatos/novatos.component';
import { Novatos2020Component  } from './components/players/novatos/novatos2020/novatos2020.component';
import { QuepasohoyComponent  } from './components/players/quepasohoy/quepasohoy.component';
import { TransaccionesComponent  } from './components/players/transacciones/transacciones.component';
import { Pruebas2019Component  } from './components/pruebas2019/pruebas2019.component';
import { LvbpHomeComponent  } from './components/lvbp-home/lvbp-home.component';
import { HrDiarioComponent  } from './components/hr-diario/hr-diario.component';
import { HrQuinielaComponent  } from './components/quiniela/hr-quiniela/hr-quiniela.component';
import { DoblesQuinielaComponent  } from './components/quiniela/dobles-quiniela/dobles-quiniela.component';
import { AcumuladoQuinielaComponent  } from './components/quiniela/acumulado-quiniela/acumulado-quiniela.component';

// import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from '../app/components/posts/post-dashboard/post-dashboard.component';
import { PostDetailComponent } from '../app/components/posts/post-detail/post-detail.component';
import { PostListComponent } from '../app/components/posts/post-list/post-list.component';
import { PostListsComponent } from '../app/components/posts/post-lists/post-lists.component';
import { PostService } from '../app/components/posts/post.service';

import {AuthGuard} from './guards/auth.guard';
import { LigaFantasySelectComponent } from './fantasy/liga-fantasy-select/liga-fantasy-select.component';
import { LigaTeamComponent } from './fantasy/liga-team/liga-team.component';
import { FantasySeleccionJugadoresComponent } from './fantasy/fantasy-seleccion-jugadores/fantasy-seleccion-jugadores.component';
import { ManagersComponent } from './components/user/managers/managers.component';
import { EditManagersComponent } from './components/user/managers/edit-managers/edit-managers.component';
import { Pitcherinfotemp2019Component } from './components/temp2019/pitchers2019/pitcherinfotemp2019/pitcherinfotemp2019.component';
import { PByteam2019Component } from './components/temp2019/pitchers2019/p-byteam2019/p-byteam2019.component';


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
  { path: 'position2019',
  component: Byposition2019Component},
  { path: 'team',
  component: ByteamComponent, pathMatch: 'full'},
  { path: 'team2019',
  component: Byteam2019Component},
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
  { path: 'p_dayAnt',
  component: PitchersDayAntComponent},
  { path: 'p_dayB',
  component: PlayersComponent},
  { path: 'p_actives19',
  component: PActives2019Component},
  { path: 'p_dominic_ftsy19',
  component: PitchersFtsyComponent},
  { path: 'p_Vzlaftsy19',
  component: PitchersVzlaFtsyComponent},
  { path: 'login',
  component: LoginComponent},
  { path: 'newsgral',
  component: NewsgralComponent},
  { path: 'profile',
  component: ProfileComponent},
  { path: 'ligasFantasy',
  component: TriviaComponent,  canActivate: [AuthGuard]},
  { path: 'videos',
  component: VideosComponent},
  { path: 'playerinfo/:code',
  component: PlayerinfoComponent, pathMatch: 'full'},
  { path: 'playerinfo2019/:code',
  component: Playerinfo2019Component},
  { path: 'playerDominicaninfo2019/:code',
  component: PlayerInfoDominicanComponent},
  { path: 'PitcherDominicaninfo2019/:code',
  component: PByteam2019Component},
  { path: 'pitcherPts2019',
  component:Pitcherinfo2019Component},
  { path: 'playeroftheweek',
  component: PlayerOfTheWeekComponent, pathMatch: 'full'},
  { path: 'pitcherinfo/:id',
  component: PitcherinfoComponent,
  pathMatch: 'full'},
  { path: 'activesPts2019',
  component: Actives2019Component},
  { path: 'bio_actives2019',
  component: BioActives2019Component},
  { path: 'infog_Show',
  component: InfogShowComponent},
  { path: 'dashboard',
  component: AuthComponent,  canActivate: [AuthGuard]},
  // component: PostDashboardComponent},
  { path: 'blog/:id',
  component: PostDetailComponent},
  { path: 'blogL/:id',
  component: PostListComponent},
  { path: 'blogLs/:id',
  component: PostListsComponent},
  { path: 'postService',
  component: PostService},
  { path: 'playerWeek',
  component: PlayerWeekComponent},
  { path: 'pitcherWeek',
  component: PitcherrWeekComponent},
  { path: 'pruebajson',
  component: PruebajsonsComponent},
  { path: 'posiciones',
  component: PosicionesComponent},
  { path: 'lideres',
  component: LideresComponent},
  { path: 'resultados',
  component: ResultadosTeamsComponent},
  { path: 'resultadosAyer',
  component: ResultadosTeamsAyerComponent },
  { path: 'letrasybeisbol',
  component: LetrasComponent },
  { path: 'equipoVzla',
  component: JugEquipVzlaComponent },
  { path: 'estadoVzla',
  component: EstadoVzlaComponent },
  { path: 'novatos',
  component: NovatosComponent },
  { path: 'novatos2020',
  component: Novatos2020Component },
  { path: 'qpasohoy',
  component: QuepasohoyComponent },
  { path: 'pruebas2019',
  component: Pruebas2019Component },
  { path: 'lvbpHome',
  component: LvbpHomeComponent },
  { path: 'HrDiario',
  component: HrDiarioComponent },
  { path: 'HrDiarioQuiniela',
  component: HrQuinielaComponent },
  { path: 'DobleDiarioQuiniela',
  component: DoblesQuinielaComponent },
  { path: 'AcumDiarioQuiniela',
  component: AcumuladoQuinielaComponent },
  { path: 'TablaQuiniela',
  component: TablaComponent },
  { path: 'transacciones',
  component: TransaccionesComponent },
  { path: 'ligaFantasy',
  component: LigaFantasySelectComponent },
  { path: 'ligaTeam',
  component: LigaTeamComponent },
  { path: 'ligaSeleccion',
  component: FantasySeleccionJugadoresComponent},
  { path: 'managersList',
  component: ManagersComponent},
  { path: 'editManagers',
  component: EditManagersComponent},
  { path: 'pitchers2019Info/:id',
  component: Pitcherinfotemp2019Component},
  { path: 'podCasts',
  component: PodcastsComponent, children:[{
    path: 'TalkBeisbol',
    component: PodcastsComponent,
  }] },

  { path: '**',
  component: NotFoundPageComponent}
];

const appRoutes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: AuthComponent},
      { path: 'logout', component: AuthComponent}
    ]
  },
  {
    path: '',
    loadChildren: 'app/modules/reader/reader.module#ReaderModule'
  },
  {
    path: 'editor',
    canActivateChild: [EditorAuthGuard],
    loadChildren: 'app/modules/editor/editor.module#EditorModule'
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EditorAuthGuard]
})
export class AppRoutingModule { }
