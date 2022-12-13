import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {


  contador:number=0;
  texto:string;
  lista:any[];
  otralista:any[];


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.contador++;
    this.lista.unshift(this.contador);
    this.otralista.push(this.contador);
    console.log(this.lista);
    console.log(this.otralista);
  }
  mostrar(yo) {
    console.log(yo.lista);
  }
  mostarEvento(evento) {
    console.log(evento.srcElement.id);
    document.getElementById(evento.srcElement.id).setAttribute('disabled','true')
  }
}

