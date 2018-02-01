import { Component, OnInit, Input } from '@angular/core';
import {NoticiaComponent} from "../noticia/noticia.component";
import {DatosService} from "../../datos.service";

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  public ListaNoticias: Array<NoticiaComponent>;

  @Input() keyb:string;
  @Input() filtro:string;
  @Input() country:string;
  @Input() busq_fecha:string;

  lista: Array<any>;

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.datos.LoadDataEvery(this.keyb, this.filtro, this.country, this.busq_fecha).subscribe(data => {
      console.log(data);
      for (let noticia of data[0]){
        noticia = new NoticiaComponent();
        this.ListaNoticias.push(noticia);
      }
    });
  }
}
