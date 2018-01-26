import { Component, OnInit } from '@angular/core';
import {NoticiaComponent} from "../noticia/noticia.component";
import {DatosService} from "../../datos.service";


@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  ListaNoticias: NoticiaComponent[];

  constructor(private datos: DatosService) { }

  ngOnInit() {
  }

  hacerRequest() {
    this.datos.LoadData().subscribe(data => {
      console.log(data);
      this.ListaNoticias.push(data.articles);
    })
  };
}
