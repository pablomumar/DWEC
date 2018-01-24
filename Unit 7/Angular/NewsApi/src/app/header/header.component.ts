import { Component, OnInit } from '@angular/core';
import {DatosService} from "../datos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyboard = '';
  private filtro = false;
  private idioma = false;

  constructor(private datos: DatosService) { }

  darInfoInput(){
    return this.keyboard; //manda keyboard a data-input.service.ts, este la pasa a datos.service.ts (Sigue error). Hacer lo mismo con los filtros
  }

  ngOnInit() {

  }

  hacerRequest() {
    if (this.keyboard.length > 0){
      this.datos.LoadData().subscribe(data => {
        console.log(data)
      })
    }
  };

}
