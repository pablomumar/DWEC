import { Component, OnInit} from '@angular/core';
import {DatosService} from "../../datos.service";
import {NoticiaServService} from "../../noticia-serv.service";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias: Array<any>;

  private id: any = null;
  private name: string;
  private source: Array<string> = [this.id, this.name];
  private author: string;
  private title: string;
  private description: string;
  private url_new: string;
  private url_image: string;
  private publishedAt: string;

  constructor(private datos: DatosService, private obtenInfo: NoticiaServService) { }

  ngOnInit() {
    this.datos.LoadDataEvery(this.obtenInfo.darKeyb(), this.obtenInfo.darFiltro(), this.obtenInfo.darCountry(), this.obtenInfo.darFechaBusq()).subscribe(data => {
      console.log(data.articles);
      this.cargarNoticias(data.articles);
    });
  }

  cargarNoticias(datos){
    for (let x = 0; x < datos.length; x++){
      let articulo = datos[x];
      this.vincularNoticias(articulo);
      //this.noticias.push(JSON.parse(articulo)); this.noticias undefined con y sin parse
      console.log(this.noticias);
    }
  }

  vincularNoticias(datos){
    this.source = datos.source;
    this.id = this.source[0];
    this.name = this.source[1];
    this.author = datos.author;
    this.title = datos.title;
    this.description = datos.description;
    this.url_new = datos.url;
    this.url_image = datos.urlToImage;
    this.publishedAt = datos.publishedAt;
  }
}
