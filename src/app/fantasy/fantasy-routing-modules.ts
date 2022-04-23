import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LigaFantasySelectComponent }    from './liga-fantasy-select/liga-fantasy-select.component';
import { AuthComponent } from '../components/auth/auth/auth.component';
import { EditorAuthGuard } from '../components/guards/editor-auth.guard.guard';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';
import { LigaTeamComponent } from './liga-team/liga-team.component';
import { FantasySeleccionJugadoresComponent } from './fantasy-seleccion-jugadores/fantasy-seleccion-jugadores.component';
import { ManagersComponent } from '../components/user/managers/managers.component';

const secondaryRoutes: Routes = [
  { path: 'ligaFantasy',  component: LigaFantasySelectComponent},
  { path: 'ligaTeam',  component: LigaTeamComponent},
  { path: 'ligaSeleccion',  component: FantasySeleccionJugadoresComponent},
  { path: 'managersList',  component: ManagersComponent},

];


const appRoutes: Routes = [
  {
    path: 'auth',
    children: [
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
  imports: [
    RouterModule.forChild(secondaryRoutes),
  ],
    exports: [RouterModule],
    providers: [EditorAuthGuard, AuthComponent],

})

export class SecondaryRoutingModule { }
