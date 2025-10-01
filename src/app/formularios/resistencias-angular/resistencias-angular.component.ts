import { Component } from '@angular/core';
import { Calculadora } from './resistencias';

@Component({
    selector: 'app-resistencias-angular',
    standalone: false,
    templateUrl: './resistencias-angular.component.html'
})
export class ResistenciasAngularComponent {

    numeros: Calculadora[] = [
        new Calculadora('Negro', '#000000', 0, 1, 20),
        new Calculadora('Marrón', '#8B4513', 1, 10, 20),
        new Calculadora('Rojo', '#FF0000', 2, 100, 20),
        new Calculadora('Naranja', '#FF8C00', 3, 1000, 20),
        new Calculadora('Amarillo', '#FFD700', 4, 10000, 20),
        new Calculadora('Verde', '#008000', 5, 100000, 20),
        new Calculadora('Azul', '#0000FF', 6, 1000000, 20),
        new Calculadora('Violeta', '#8A2BE2', 7, 10000000, 20),
        new Calculadora('Gris', '#808080', 8, 100000000, 20),
        new Calculadora('Blanco', '#FFFFFF', 9, 1000000000, 20)
    ];

    multiplicadores: Calculadora[] = [
        new Calculadora('x1', '#000000', 0, 1, 20),
        new Calculadora('x10', '#8B4513', 0, 10, 20),
        new Calculadora('x100', '#FF0000', 0, 100, 20),
        new Calculadora('x1k', '#FF8C00', 0, 1000, 20),
        new Calculadora('x10k', '#FFD700', 0, 10000, 20),
        new Calculadora('x100k', '#008000', 0, 100000, 20),
        new Calculadora('x1M', '#0000FF', 0, 1000000, 20)
    ];

    tolerancias: Calculadora[] = [
        new Calculadora('±20%', '#FFFFFF', 0, 1, 20),
        new Calculadora('±10%', '#C0C0C0', 0, 1, 10),
        new Calculadora('±5%', '#D4AF37', 0, 1, 5)
    ];

    uno: Calculadora = this.numeros[1];
    dos: Calculadora = this.numeros[0];
    mult: Calculadora = this.multiplicadores[3];
    tol: Calculadora = this.tolerancias[2];

    valorOhms = 0;
    valorMax = 0;
    valorMin = 0;

    calcular(): void {
        const calc = new Calculadora('', '', 0, 0, 0);
        calc.calcular(this.uno, this.dos, this.mult, this.tol);

        this.valorOhms = calc.valorOhms;
        this.valorMin = calc.valorMin;
        this.valorMax = calc.valorMax;
    }

    
}
