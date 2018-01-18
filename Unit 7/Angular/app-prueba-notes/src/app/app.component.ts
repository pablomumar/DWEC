import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listaNotas = [];

  constructor() {
  }

  anadirNota() {
    const titulo = window.prompt('introduce título');
    const contenido = window.prompt('introduce el contenido');
    this.listaNotas.push({titulo: titulo, contenido: contenido});
}
}
