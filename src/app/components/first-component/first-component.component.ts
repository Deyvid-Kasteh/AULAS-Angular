import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Deyvid';
  age: number = 32;
  job = 'Programador';
  hobbies = ["correr", "nadar", "escutar musicas", "passear", "estudar", "viajar"];
  car = {
    marca: "VW",
    nome: "New Beelte",
    ano: 2010

  }

  constructor() { }

  ngOnInit(): void {
  }

}
