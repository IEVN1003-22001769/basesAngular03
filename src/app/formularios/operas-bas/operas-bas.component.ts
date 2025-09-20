import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: string = "";
  num2: string = "";
  operacion: string = "";
  resultado: number = 0;
    calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch (this.operacion) {
      case "suma":
        this.resultado = n1 + n2;
        break;
      case "resta":
        this.resultado = n1 - n2;
        break;
      case "multiplicacion":
        this.resultado = n1 * n2;
        break;
      case "division":
        this.resultado = n1 / n2;
        break;
    }
  }
}
