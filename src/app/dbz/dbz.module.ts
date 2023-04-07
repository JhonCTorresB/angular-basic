// CREAMOS EL MODULO AUTOMATICAMENTE CON ng g m dbz en la terminal

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[//aqui se espacifican todos los servicios
    DbzService
  ]
})
export class DbzModule { }
