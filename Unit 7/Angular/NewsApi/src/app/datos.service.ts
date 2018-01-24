import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DatosService {
  result = new Subject<any>();
  busqueda: string;

  constructor(private $http:HttpClient) {
    //$http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=420b00ab4edb4a35bb86d393edd69dda').subscribe(result => this.result)
  }

  exportar(){
    this.result.asObservable(); //Esta funcion es la que exportamos xd
  }

  devuelve(){
    return this.result.next(this.LoadData());
  }

  LoadData() :Observable<any>{
    this.busqueda = 'q=bitcoin';
    return this.$http.get('https://newsapi.org/v2/everything?' + this.busqueda + '&apiKey=420b00ab4edb4a35bb86d393edd69dda');
  }

}
