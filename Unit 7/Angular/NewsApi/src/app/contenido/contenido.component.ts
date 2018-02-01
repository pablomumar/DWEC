import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  lista: Array<string>;

  @Input() keyb:string;
  @Input() filtro:string;
  @Input() country:string;
  @Input() busq_fecha:string;

  constructor() { }

  gggg(event):void {
    console.log('33333');
    this.lista = event.pasarFiltros();
    console.log('recibido');
  }

  ngOnInit() {
  }

}
