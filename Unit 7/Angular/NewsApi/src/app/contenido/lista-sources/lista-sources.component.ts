import { Component, OnInit } from '@angular/core';
import {DatosService} from "../../datos.service";
import {NoticiaServService} from "../../noticia-serv.service";

@Component({
  selector: 'app-lista-sources',
  templateUrl: './lista-sources.component.html',
  styleUrls: ['./lista-sources.component.css']
})
export class ListaSourcesComponent implements OnInit {

  sources = [];

  constructor(private datos: DatosService, private obtenInfo: NoticiaServService) { }

  ngOnInit() {
    this.datos.LoadSourceData(this.obtenInfo.darCat()).subscribe( data => {
      this.sources = data.sources;
      console.log(this.sources);
      return data.sources;
    })
  }


}
