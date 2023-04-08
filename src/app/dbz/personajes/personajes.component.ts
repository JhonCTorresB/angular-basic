import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // INPUT nos quiere decir en este caso q personajes viene de un componente padre
  // 'data' para poder etiquetar e invocar con otro nombre, en main-page-component.html
  //@Input(/*'data'*/) personajes: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService) {}
}
