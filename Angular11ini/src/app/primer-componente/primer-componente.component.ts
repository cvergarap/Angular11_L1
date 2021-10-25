import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pri-compo',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
// definicion de variables públicas

public edad:number;

//inicialización de las variables cuando se crea el objeto
  constructor() {
    this.edad= 18;
  }

  ngOnInit(): void {
    //console.log('Variable edad del componente es: '+ this.edad);
  }

  AumentarEdad(){
    this.edad++;
    console.log(this.edad);
  }
  DisminuirEdad(){
    this.edad--;
    console.log(this.edad);
  }

}
