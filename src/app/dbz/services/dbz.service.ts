import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    
    private _personajes: Personaje[] = [ // poner _ para designar propiedad
        {
            nombre: 'Goku',
            poder: 20000
        },
        {
            nombre: 'Broly',
            poder: 25000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje){
        this._personajes.push( personaje );
    }
}