import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-app-notas',
  templateUrl: './app-notas.component.html',
  styleUrls: ['./app-notas.component.scss']
})
export class AppNotasComponent implements OnInit {
  @Input() titulo: string;
  @Input() contenido: string;
  //@Output()

  constructor() { }

  ngOnInit() {
  }

}
