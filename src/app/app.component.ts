import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { ForthComponentComponent } from './components/forth-component/forth-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesteComponent, SecondComponentComponent, ThirdComponentComponent, ForthComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkpoint-2';
}
