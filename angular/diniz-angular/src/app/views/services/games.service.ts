import { Injectable } from '@angular/core';
import { Game } from '../home/model/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  list(): Game[] {
    return [
      { id: '1', name: 'God of War', description: 'Action Game', platforms: 'Playstation 2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg', category: 'Ação'}
    ];
  }
}
