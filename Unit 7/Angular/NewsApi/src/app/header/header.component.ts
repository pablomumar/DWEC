import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyboard = '';
  private filtro = false;
  private idioma = false;

  constructor() { }

  ngOnInit() {

  }



}
