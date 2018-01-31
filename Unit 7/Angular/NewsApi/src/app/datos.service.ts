import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DatosService {
  entradaKey: string;
  filtro: string;
  country: string;
  category: string;
  busq_fecha: string;

  constructor(private $http:HttpClient) {
  }

  LoadDataEvery(entradaKey, filtro, country, busq_fecha) :Observable<any>{
    entradaKey.length == 0 ? this.entradaKey = '' : this.entradaKey = 'q=' + entradaKey + '&';
    filtro.length == 0 ? this.filtro = '' : this.filtro = 'sortBy=' + filtro + '&';
    country.length == 0 ? this.country = '' : this.country = 'language=' + country + '&';
    busq_fecha.length == 0 ? this.busq_fecha = '' : this.busq_fecha = busq_fecha + '&';
    console.log('Keyb: ' + this.entradaKey);
    console.log('filt: ' + this.filtro);
    console.log('lang: ' + this.country);
    console.log('fecha: ' + this.busq_fecha);
    return this.$http.get('https://newsapi.org/v2/everything?' + this.entradaKey + this.filtro + this.country + this.busq_fecha +'apiKey=420b00ab4edb4a35bb86d393edd69dda');
  }

  LoadSourceData(category) :Observable<any>{
    this.category = 'category=' + category;
    return this.$http.get('https://newsapi.org/v2/sources?' + this.category + '&apiKey=420b00ab4edb4a35bb86d393edd69dda')
  }
}
