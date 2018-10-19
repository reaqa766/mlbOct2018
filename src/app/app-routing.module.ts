import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent} from '../app/components/news/news.component';
import { HomeComponent} from '../app/components/home/home.component';

const routes: Routes = [

  { path:'home',
  component: HomeComponent},

  { path:'news',
  component: NewsComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
