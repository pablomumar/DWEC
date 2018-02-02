import { Component, OnInit} from '@angular/core';
import {DatosService} from "../../datos.service";
import {NoticiaServService} from "../../noticia-serv.service";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias = [];

  constructor(private datos: DatosService, private obtenInfo: NoticiaServService) { }

  ngOnInit() {
    this.datos.LoadDataEvery(this.obtenInfo.darKeyb(), this.obtenInfo.darFiltro(), this.obtenInfo.darCountry(), this.obtenInfo.darFechaBusq()).subscribe(data => {
      console.log(data.articles);
      this.noticias = data.articles;
      console.log(this.noticias);
      return data.articles;
    });
  }

  showDesc(){
    $('.contenido').removeClass('desapear');
  }

}
