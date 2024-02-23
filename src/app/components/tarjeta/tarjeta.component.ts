import { Component, Input } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})

export class TarjetaComponent {
  favoriteButton: Boolean = false;
  listFavoritesCharacters: any = [];
  visible: boolean = false;
  characterSelected: any = [];
  characterSimilar: any = [];

  constructor(private apiService: TarjetaService) { }

  @Input() characters: any = this.apiService.getCharacters('?All'); // Recibirá la lista de characters desde el componente padre

  filterFavorites() {
    this.favoriteButton = !this.favoriteButton;
    if (this.favoriteButton) {
      this.characters = this.listFavoritesCharacters;
    } else {
      //borrar filtros
      this.filterCharacters()
    }
  }

  filterCharacters() {
    this.apiService.getCharacters('?All').subscribe(
      (response) => {
        this.characters = response.results;

        if (this.listFavoritesCharacters.length > 0) {
          this.marcarFavorito();
        }
      },
      (error) => {
        this.characters = [];
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }

  clearFilters() {
    this.favoriteButton = false;
    this.listFavoritesCharacters = [];
    this.apiService.setSharedVar(true)
    this.filterCharacters();
  }

  showDialog(data: any) {
    this.visible = true;
    this.characterSelected = data;
    var listEpisodes: any = [];

    

    this.characterSelected.episode.forEach((data: any) => {
      const partes = data.split('/');
      const numero = partes[partes.length - 1];
      listEpisodes.push(parseInt(numero));
    });

    this.apiService.getEpisodes('/' + listEpisodes).subscribe(
      (response) => {
        const respuesta = response;
        if (respuesta.length == undefined) {
          this.characterSelected['listEpisodes'] = [];
          this.characterSelected['listEpisodes'].push(respuesta);
        } else {
          this.characterSelected['listEpisodes'] = respuesta;
        }
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );

    this.apiService.getCharacters('?status=' + data.status + '&species=' + data.species).subscribe(
      (response) => {
          this.characterSimilar = response.results.slice(0, 2);
          console.log(this.characterSimilar)
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }

  marcarFavorito() {
    this.characters.forEach((obj1: any) => {
      let encontrado = this.listFavoritesCharacters.some((obj2: any) => obj2.id === obj1.id);

      if (encontrado) {
        obj1.favorite = true;
      }
    });
  }

  addToFavorite(character: any) {
    let indice = this.listFavoritesCharacters.findIndex(function (objeto: any) { return objeto.id === character.id });

    if (indice !== -1) {
      this.listFavoritesCharacters.splice(indice, 1);
    } else {
      this.listFavoritesCharacters.push(character);
    }
  }
}
