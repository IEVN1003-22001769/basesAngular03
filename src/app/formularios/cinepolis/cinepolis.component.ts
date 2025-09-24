import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cinepolis.component.html'
})


export class CinepolisComponent {
 
  nombre: string = '';
  cantidadC: number = 1;
  tarjetaCineco: boolean = false;
  cantidadBoletas: number = 1;
  precioBoleta: number = 12;
  pago: number = 0;

  mensaje: string = '';

  procesar(): void {
  this.mensaje = '';
  this.pago = 0;

  
  const maxBoletas = this.cantidadC * 7;
  if (this.cantidadBoletas > maxBoletas) {
    this.mensaje = `No puede comprar más de 7 boletas por persona. 
    Con ${this.cantidadC} comprador(es) el máximo es ${maxBoletas}.`;
    return;
  }

  const base = this.cantidadBoletas * this.precioBoleta;

  let descuentoPorcentual = 0;
  if (this.cantidadBoletas > 5) {
    descuentoPorcentual = 15;
  } else if (this.cantidadBoletas >= 3) {
    descuentoPorcentual = 10;
  }

  let total = base * (1 - descuentoPorcentual / 100);

  if (this.tarjetaCineco) {
    total = total * 0.90;
  }

  this.pago = Math.round(total);
    this.mensaje = `Descuento aplicado: ${descuentoPorcentual}%` + (this.tarjetaCineco ? ' + 10% por CINECO' : '');
}

  salir(): void {
    this.nombre = '';
    this.cantidadC = 1;
    this.tarjetaCineco = false;
    this.cantidadBoletas = 1;
    this.pago = 0;
    this.mensaje = '';
  }

}
