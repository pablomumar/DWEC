import { Injectable } from '@angular/core';
import {HttpRequest} from "@angular/common/http";
import {Http} from "@angular/http";

@Injectable()
export class DatosService {
  result:any;

  constructor(private $http:Http) {
    this.$http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=420b00ab4edb4a35bb86d393edd69dda').subscribe(result => this.result)
  }

}
