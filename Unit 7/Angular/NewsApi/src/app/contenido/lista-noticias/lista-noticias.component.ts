import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  lista: Array<any>;

  constructor() { }

  request(event):void{
    this.lista = event.request;
    console.log('recibido')
  }

  ngOnInit() {
    this.request(event);
  }
}
