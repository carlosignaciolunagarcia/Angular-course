import { ChangeDetectionStrategy, Component, input,output,signal } from '@angular/core';
import { Character } from '../../interfaces/character.interfac';

@Component({
  selector: 'app-dragonball-character-add',
  templateUrl: './dragonball-character-add.html',
})

export class DragonballCharacterAdd { 
  
  characters=input<Character[]>([]);
  //señales
  name=signal('');
  power=signal(0);
  
  //canal para emitir nuevos personajes
  newCharacter=output<Character>();

    addCharacter(){
    if(!this.name||!this.power){
      return;
    }else{
      const newCharacter:Character={
        id: Math.floor(Math.random()*10000),
        name: this.name(),
        power: this.power(),
      }
      //this.characters.update((list) => [...list, newCharacter]);
      this.newCharacter.emit(newCharacter);// regresa el arreglo con el nuevo caracter que se agrego
      this.resetFields();
    }
    

  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
