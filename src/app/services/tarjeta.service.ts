import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {
  constructor(private http: HttpClient) {}
  apiUrl: string = 'https://rickandmortyapi.com/api/'
  private sharedVar = new BehaviorSubject<boolean>(false);

  getSharedVar() {
    return this.sharedVar.asObservable();
  }

  setSharedVar(newValue: boolean) {
    this.sharedVar.next(newValue);
  }
  
  getCharacters(filtro: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}character` + filtro);
  }

  getEpisodes(filtro: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}episode` + filtro);
  }
}
