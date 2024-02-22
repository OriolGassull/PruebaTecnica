import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  tabValue: string = 'All';
  activeIndex: number = 0;

  @Output() search = new EventEmitter<string>();

  searchCharacters() {
    this.search.emit(this.searchTerm);
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
