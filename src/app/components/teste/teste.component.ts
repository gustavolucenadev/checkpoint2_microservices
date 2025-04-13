import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  itens: string[] = ["Maçã", "Banana", "Leite"];
  mes: number = 1;

}
