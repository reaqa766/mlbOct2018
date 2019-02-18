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
import { Playerinfo2019Component } from './components/temp2019/players2019/playerinfo2019/playerinfo2019.component';
import { Byteam2019Component } from './components/temp2019/players2019/byteam2019/byteam2019.component';
import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';

// import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from '../app/components/posts/post-dashboard/post-dashboard.component'
import { PostDetailComponent } from '../app/components/posts/post-detail/post-detail.component'
import { PostListComponent } from '../app/components/posts/post-list/post-list.component'
import { PostListsComponent } from '../app/components/posts/post-lists/post-lists.component'
import { PostService } from '../app/components/posts/post.service'







import {AuthGuard} from './guards/auth.guard';


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
  component: ByteamComponent},
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
  { path: 'p_actives19',
  component: PActives2019Component},
  { path: 'login',
  component: LoginComponent},
  { path: 'newsgral',
  component: NewsgralComponent},
  { path: 'profile',
  component: ProfileComponent},
  { path: 'trivia',
  component: TriviaComponent},
  { path: 'videos',
  component: VideosComponent},
  { path: 'playerinfo/:code',
  component: PlayerinfoComponent, pathMatch: 'full'},
  { path: 'playerinfo2019/:code',
  component: Playerinfo2019Component, pathMatch: 'full'},
  { path: 'pitcherinfo/:id',
  component: PitcherinfoComponent,
  pathMatch: 'full'},
  { path: 'actives2019',
  component: Actives2019Component},
  { path: 'bio_actives2019',
  component: BioActives2019Component},
  { path: 'infog_Show',
  component: InfogShowComponent},
  { path: 'dashboard',
  component: AuthComponent},
  // component: PostDashboardComponent},
  { path: 'blog/:id',
  component: PostDetailComponent},
  { path: 'blogL/:id',
  component: PostListComponent},
  { path: 'blogLs/:id',
  component: PostListsComponent},
  { path: 'postService',
  component: PostService},
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
