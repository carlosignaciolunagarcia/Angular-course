import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
})

export class DragonballSuperPageComponent {

  name =signal('');
  power =signal(0);

  //signal de tipo arreglo
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);
  
  addCharacter(){
    if(!this.name||!this.power){
      return;
    }else{
      const newCharacter:Character={
        id: this.characters().length+1,
        name: this.name(),
        power: this.power(),
      }
      this.characters.update((list) => [...list, newCharacter]);
      this.resetFields();
    }
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
