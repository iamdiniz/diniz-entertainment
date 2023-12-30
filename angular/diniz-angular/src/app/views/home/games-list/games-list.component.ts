import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { GamesService } from '../../services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private gamesService: GamesService) {
    this.games = this.gamesService.list();
  }

  ngOnInit(): void {

  }

}
