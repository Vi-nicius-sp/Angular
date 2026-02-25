import { Component, signal } from '@angular/core';
import { ComponentePrime } from "./componente-prime/componente-prime";

@Component({
  selector: 'app-root',
  imports: [ComponentePrime],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primery-project');
}
