import { Component, OnInit } from '@angular/core';
import { ContenidoComponent } from "../contenido/contenido.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyboard = '';
  private filtro = false;
  private idioma = false;

  constructor() { }

  darInfoInput() {
    return this.keyboard; //manda keyboard a data-input.service.ts, este la pasa a datos.service.ts (Sigue error). Hacer lo mismo con los filtros
  }

  ngOnInit() {

  }



}
