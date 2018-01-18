import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listaNotas = [];

  titulo = '';
  contenido = '';

  constructor() {
  }

  anadirNota() {
    console.log('dsfasdf');
    this.listaNotas.push({titulo: this.titulo, contenido: this.contenido});
  }
}
