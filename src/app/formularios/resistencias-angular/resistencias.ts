export class Calculadora {
    nombre: string;
    colorsillo: string;
    digito: number;
    multi: number;
    tolerancia: number;

    valorOhms: number = 0;
    valorMin: number = 0;
    valorMax: number = 0;

    constructor(nombre: string, colorsillo: string, digito: number, multi: number, tolerancia: number) {
        this.nombre = nombre;
        this.colorsillo = colorsillo;
        this.digito = digito;
        this.multi = multi;
        this.tolerancia = tolerancia;
    }

    calcular(uno: Calculadora, dos: Calculadora, mult: Calculadora, tol: Calculadora): void {
        const base = uno.digito * 10 + dos.digito;
        this.valorOhms = base * mult.multi;

        const tolFrac = tol.tolerancia / 100;
        this.valorMin = this.valorOhms * (1 - tolFrac);
        this.valorMax = this.valorOhms * (1 + tolFrac);
    }
}
