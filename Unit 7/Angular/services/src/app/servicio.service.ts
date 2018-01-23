import { Injectable } from '@angular/core';

@Injectable()
export class ServicioService {

  coches : Array<string> = ['ford', 'mustang', 'wv'];

  constructor() { }

  getCoches() {
    return this.coches;
  }

}
