import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameFormComponent } from './home/game-form/game-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: GameFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
