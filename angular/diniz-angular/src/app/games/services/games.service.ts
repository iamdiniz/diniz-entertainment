import { Injectable } from '@angular/core';
import { Game } from '../home/model/game';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly API = 'api/games';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Game[]>(this.API)
    .pipe(
      //first(),
      delay(1000),
      tap(games => console.log(games))
    );
  }
}
