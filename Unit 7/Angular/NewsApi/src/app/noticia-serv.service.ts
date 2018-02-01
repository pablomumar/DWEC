import { Injectable } from '@angular/core';

@Injectable()
export class NoticiaServService {

  public keyboard:string;
  public filtro:string;
  public country:string;
  public busq_fecha:string;
  public category:string;

  constructor() { }

  pedirBusqCompleta(keyb, filtro, country, busq_fecha){
    this.keyboard = keyb;
    this.filtro = filtro;
    this.country = country;
    this.busq_fecha = busq_fecha;
  }

  pedirCat(cat){
    return this.category = cat;
  }

  darCat(){
    return this.category
  }

  darKeyb(){
    return this.keyboard
  }

  darFiltro(){
    return this.filtro
  }

  darCountry(){
    return this.country
  }

  darFechaBusq(){
    return this.busq_fecha
  }

}
