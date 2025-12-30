import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
    //NgClass
  ],
  templateUrl: './dragonball-page.component.html',

})
export class DragonballPageComponent {

  //signal de tipo arreglo
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ]);
  
  /*
  powerClasess= computed( () => {
    return{
      'text-danger':true,
    } 
  })*/
}
