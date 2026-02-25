import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-componente-prime',
  imports: [],
  templateUrl: './componente-prime.html',
  styleUrl: './componente-prime.css',
})
export class ComponentePrime {

nome:string = "Vinicius";
idade:number = 18;
nacionalidade:string = "Brasileiro";
prof_sonhos:string = "Segurança da Informação";

}
