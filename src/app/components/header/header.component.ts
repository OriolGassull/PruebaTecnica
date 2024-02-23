import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  tabValue: string = '?All';
  activeIndex: number = 0;
  filters = ['name','status','species','type','gender'];
  opcionesSeleccionadas: string[] = []
  
  @Output() search = new EventEmitter<string>();

  searchCharacters() {
    var filterList = "?";

    this.opcionesSeleccionadas.forEach(element => {
      filterList += element + '=' + this.searchTerm + "&";
    });

    this.search.emit(filterList);
  }

  onCheckboxChange(filtro: string) {
    let indice = this.opcionesSeleccionadas.findIndex(function(objeto: any){return objeto === filtro});

    if(indice !== -1) {
      this.opcionesSeleccionadas.splice(indice, 1);
    } else {
      this.opcionesSeleccionadas.push(filtro);
    }
  }

  seleccionarCategoria(texto: string) {
    this.tabValue = texto;
    this.searchTerm = '';
    this.search.emit(texto);
  }

  ngOnInit(): void {
    this.seleccionarCategoria(this.tabValue);
  }
}
