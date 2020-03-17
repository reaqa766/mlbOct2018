import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaFantasySelectComponent } from './liga-fantasy-select/liga-fantasy-select.component';
import { SecondaryRoutingModule } from './fantasy-routing-modules';
import { PlayersService } from 'src/services/players.service';
import { PagerService } from 'src/services';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { FlashMessagesService } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    SecondaryRoutingModule
  ],
  declarations: [LigaFantasySelectComponent],
  exports: [
    LigaFantasySelectComponent
  ],
  providers: [PlayersService, PagerService, AngularFirestore, AuthService, AuthGuard, FlashMessagesService ],

})
export class FantasyModule { }
