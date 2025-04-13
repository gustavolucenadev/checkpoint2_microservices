import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  status: string = "pendente";
  usuarios: { nome: string; idade: number }[] = [
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 30 }
];
}
