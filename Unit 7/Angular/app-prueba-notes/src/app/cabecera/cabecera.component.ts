import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  @Input() titulo: string;
  @Input() contenido: string;
  @Output() evento:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
