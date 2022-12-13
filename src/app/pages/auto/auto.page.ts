import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {
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
}
