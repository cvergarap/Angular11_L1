import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seg-compo',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {
  
  public nombres:Array<String>;
  
  constructor() {  
    this.nombres= ["Nombre1","Nombre2","Nombre3","Nombre4","Nombre5"];
  }

  ngOnInit(): void {
  }

}
