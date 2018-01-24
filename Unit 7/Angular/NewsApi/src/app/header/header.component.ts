import { Component, OnInit } from '@angular/core';
import {DatosService} from "../datos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.datos.exportar().subscribe(data => {
      console.log(data);
    });
  }

}
