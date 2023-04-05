import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 15;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // los `` nos ayudan a crear templates de un string
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}