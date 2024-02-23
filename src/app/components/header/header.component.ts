import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private subscription?: Subscription;
  
  constructor(private apiService: TarjetaService) {}

  searchTerm: string = '';
  tabValue: string = '?All';
  activeIndex: number = 0;
  filters = ['name','status','species','type','gender'];
  opcionesSeleccionadas: string[] = []
  checkboxState: { [key: string]: boolean } = {};

  @Output() search = new EventEmitter<string>();

  searchCharacters() {
    var filterList = "?";

    this.opcionesSeleccionadas.forEach(element => {
      filterList += element + '=' + this.searchTerm + "&";
    });

    this.search.emit(filterList);
  }

  onCheckboxChange(filtro: string) {
    this.checkboxState[filtro] = !this.checkboxState[filtro];
    let indice = this.opcionesSeleccionadas.findIndex(function(objeto: any){return objeto === filtro});

    if(indice !== -1) {
      this.opcionesSeleccionadas.splice(indice, 1);
    } else {
      this.opcionesSeleccionadas.push(filtro);
    }
  }

  selectCategory(texto: string) {
    this.tabValue = texto;
    this.searchTerm = '';
    this.opcionesSeleccionadas = [];
    this.search.emit(texto);
  }

  ngOnInit() {
    this.selectCategory(this.tabValue);

    this.subscription = this.apiService.getSharedVar().subscribe(
      (nuevoValor: any) => {
        if(nuevoValor) {
          this.searchTerm = '';
          this.checkboxState = {};
          this.opcionesSeleccionadas = [];
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
