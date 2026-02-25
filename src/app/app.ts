import { Component, signal } from '@angular/core';
import { ComponentePrime } from "./componente-prime/componente-prime";
import { SegundoComponente } from "./segundo-componente/segundo-componente";

@Component({
  selector: 'app-root',
  imports: [ComponentePrime, SegundoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primery-project');
}
