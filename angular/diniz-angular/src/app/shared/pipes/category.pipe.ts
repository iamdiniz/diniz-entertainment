import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Ação': return 'mediation';
      case 'Estratégia': return 'extension';
      case 'Luta': return 'sports_martial_arts';
      case 'Role Playing': return 'public';
      case 'Corrida': return 'sports_score';
      case 'Esporte': return 'sports_soccer';
      case 'Puzzle': return 'psychology';
      case 'Simulação': return 'sports_motorsports';
      case 'Musical': return 'music_note';
      case 'Arcade': return 'joystick';
    }
    return '';
  }

}
