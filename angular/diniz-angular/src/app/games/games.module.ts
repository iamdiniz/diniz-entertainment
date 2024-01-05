import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './home/games-list/games-list.component';
import { HomeComponent } from './home/home.component';
import { GameFormComponent } from './home/game-form/game-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    GamesListComponent,
    GameFormComponent
  ],
  imports: [
    AppMaterialModule,
    FlexLayoutModule,
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
