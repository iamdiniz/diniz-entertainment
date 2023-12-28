import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [
    { id: '1', name: 'God of War', description: 'Action Game', platforms: 'ps2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg'},
    { id: '1', name: 'God of War', description: 'Action Game', platforms: 'ps2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg'},
    { id: '1', name: 'God of War', description: 'Action Game', platforms: 'ps2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg'},
    { id: '1', name: 'God of War', description: 'Action Game', platforms: 'ps2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg'},
    { id: '1', name: 'God of War', description: 'Action Game', platforms: 'ps2', year: 2001, img: 'https://meups.com.br/wp-content/uploads/2018/03/God-of-War_Fantasma-de-Esparta.jpg'}
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
