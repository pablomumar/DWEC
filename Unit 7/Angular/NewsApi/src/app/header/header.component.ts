import { Component, OnInit } from '@angular/core';
import {DatosService} from "../datos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ListaNoticias: Array<any>[];

  keyboard = '';
  private filtro = false;
  private idioma = false;

  constructor(private datos: DatosService) {
  }

  hacerRequest(){
    this.datos.LoadData(this.keyboard).subscribe(data => {
      console.log(data);
     // this.ListaNoticias.push(data.articles);
    })
  }

  pasarInfo(){
    return this.keyboard;
  }

  ngOnInit() {

  }



}
