import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {

  name: string = "lele"
  age: number = 30
  job = "programadora"
  hobbies = ['ler', 'cantar', 'cozinhar']
  car = {
    name: "argo",
    year: 2023
  }

  constructor(){  }

}
