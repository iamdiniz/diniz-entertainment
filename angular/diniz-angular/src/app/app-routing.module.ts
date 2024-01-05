import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameFormComponent } from './games/home/game-form/game-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' ,redirectTo: 'games' },
  { path: 'new', component: GameFormComponent },
  { path: 'games',
  loadChildren: () => import('./games/games.module').then(m => m.GamesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
