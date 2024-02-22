import { Component, Input } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})

export class TarjetaComponent {
  favoriteButton: Boolean = false;

  constructor(private apiService: TarjetaService) { }

  @Input() characters: any[] = this.apiService.getCharacters(''); // Recibirá la lista de characters desde el componente padre

  filterFavorites() {
    this.favoriteButton = !this.favoriteButton;
  } 
}
