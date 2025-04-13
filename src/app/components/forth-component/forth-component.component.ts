import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forth-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forth-component.component.html',
  styleUrl: './forth-component.component.css'
})
export class ForthComponentComponent {
  valor: number = 1;
  email: String = ''
  senha: String = '';
  emailEsperado: String = 'user@teste.com';
  senhaEsperada: String = '123456';
  produtos: { nome: string; preco: number, promocao: boolean}[] = [
    {
      nome: 'Notebook',
      preco: 300,
      promocao: true
    },
    {
      nome: 'Mouse',
      preco: 50,
      promocao: false
    }
  ]
  operacaoSelecionada: string = 'soma';
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;
  

  calcular() {
    switch (this.operacaoSelecionada) {
      case 'soma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'sub':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multi':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'divi':
        this.resultado = this.valor2 !== 0 ? this.valor1 / this.valor2 : NaN;
        break;
      default:
        this.resultado = NaN;
        break;
    }
  }
}
