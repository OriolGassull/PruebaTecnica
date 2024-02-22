import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {
  private characterList: string[] = ['Personaje 1', 'Personaje 2', 'Personaje 3', 'Personaje 4', 'Personaje 5', 'Personaje 6', 'Personaje 7'];

  getCharacters(data: string): string[] {
    const dataFilter = [] as string[];

    this.characterList.forEach(element => {
      if (element.includes(data) || data == 'All') {
        dataFilter.push(element);
      }
    });
    return dataFilter;
  }
}
