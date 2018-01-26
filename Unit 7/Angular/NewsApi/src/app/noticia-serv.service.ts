import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import { NoticiaComponent } from "./contenido/noticia/noticia.component";

@Injectable()
export class NoticiaServService {

  public $visible = new Subject<NoticiaComponent>();

  constructor() { }

}
