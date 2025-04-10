import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  itens: string[] = ["Maçã", "Banana","Leite"];

}
