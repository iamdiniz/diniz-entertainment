import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDiaogComponent } from 'src/app/shared/components/error-diaog/error-diaog.component';

import { GamesService } from '../../services/games.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games$: Observable<Game[]>;

  constructor(private gamesService: GamesService,
    public dialog: MatDialog) {
    this.games$ = this.gamesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os jogos.');
          return of([])
        })
      )
  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDiaogComponent, {
      data: errorMsg
    });
  }

}
