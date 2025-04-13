import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'] // Corrigido: `styleUrls` estava com erro de digitação.
})
export class SecondComponentComponent {
  idade: number = 18;
  tarefas: string[] = ["Estudar Angular", "Fazer exercícios", "Revisar código"];

  removeTask(task: string) {
    const index: number = this.tarefas.indexOf(task);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }
}