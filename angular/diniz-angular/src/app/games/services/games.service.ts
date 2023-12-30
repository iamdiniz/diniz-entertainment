import { Injectable } from '@angular/core';
import { Game } from '../home/model/game';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly API = '/assets/games.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Game[]>(this.API)
    .pipe(
      first(),
      tap(games => console.log(games))
    );
  }
}
