import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {
  constructor(private http: HttpClient) {}
  private characterList: string[] = ['Personaje 1', 'Personaje 2', 'Personaje 3', 'Personaje 4', 'Personaje 5', 'Personaje 6', 'Personaje 7'];
  apiUrl: string = 'https://rickandmortyapi.com/api/'

  // getCharacters(data: string): string[] {
  //   const dataFilter = [] as string[];

  //   this.characterList.forEach(element => {
  //     if (element.includes(data) || data == 'All') {
  //       dataFilter.push(element);
  //     }
  //   });
  //   return dataFilter;
  // }

  getCharacters(filtro: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}character` + filtro);
  }

  getEpisodes(filtro: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}episode` + filtro);
  }
}
