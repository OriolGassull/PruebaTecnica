import { Component } from '@angular/core';
import { TarjetaService } from './services/tarjeta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectTest';
  characters: any[] = [];

  constructor(private apiService: TarjetaService) { }

  searchCharacters(searchTerm: string) {
    this.apiService.getCharacters(searchTerm).subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        this.characters = [];
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
}
