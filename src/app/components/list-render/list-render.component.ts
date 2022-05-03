import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name:'Turca', type:'Dog', age: 5},
    { name:'Tom', type: 'Cat', age: 5},
    { name:'Frida', type: 'Dog', age: 8},
    { name:'Bob', type: 'horse', age: 15},
  ]


  animal: Animal = {
    name: 'teste',
    type: 'alguma coisa',
    age: 15
  }

  animalDetails = ''
  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

}
