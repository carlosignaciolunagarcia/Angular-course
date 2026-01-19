import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  placeholder = input('Buscar');
  newSearch=output<string>();// la informacion de l que buscamos saldra por aqui

  onSearch(value:string){
    console.log(value);
    this.newSearch.emit(value);
  }
}