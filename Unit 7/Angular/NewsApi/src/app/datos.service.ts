import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Subject} from "rxjs/Subject";


@Injectable()
export class DatosService {
  entradaKey: string;

  constructor(private $http:HttpClient) {
  }

  LoadData() :Observable<any>{
    this.entradaKey = 'q=' + '{{keyboard}}';
    return this.$http.get('https://newsapi.org/v2/everything?' + this.entradaKey + '&apiKey=420b00ab4edb4a35bb86d393edd69dda');
  }
}
