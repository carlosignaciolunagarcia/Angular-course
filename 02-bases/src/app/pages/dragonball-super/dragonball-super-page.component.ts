import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { DragonballCharacterAdd } from '../../components/dragonball-character-add/dragonball-character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList,DragonballCharacterAdd],
})

export class DragonballSuperPageComponent {
  //formas de inyeccion de dependencia(servicio)
  
  //forma 1: inyeccion via constructor
  /*
  constructor(public dragonballService: DragonballService) {
  }
  */
 //forma2: inyeccion via del inject()
  public dragonballService = inject(DragonballService);

}
