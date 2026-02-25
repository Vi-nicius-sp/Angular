import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-segundo-componente',
  imports: [],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css',
})
export class SegundoComponente {
  mensagem(){
    alert('Olá, Mundo !')
  }
}
