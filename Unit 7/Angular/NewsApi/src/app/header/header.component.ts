import {Component,  OnInit} from '@angular/core';
import {DatosService} from "../datos.service";
import {} from '@types/jquery';
import {NoticiaServService} from "../noticia-serv.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyboard = '';
  filtro = '';
  country = '';
  category = '';
  date = new Date();
  fecha_act = '';
  busq_fecha = '';
  bread='';
  Listcategories = ['catAll', 'catSport', 'catScience', 'catMisc'];

  cont = 0;

  coloresClar = ['blueClaro', 'rojoClaro', 'verdeClaro', 'amarilloClaro', 'rosaClaro', 'blanco'];
  coloresOsc = ['blue', 'rojo', 'verde', 'amarillo', 'rosa', 'gris'];


  constructor(private datos: DatosService, private darInfo: NoticiaServService) {
  }

  Bread(id){ //Cambia los colores del Breadcrumb al clickar
    if (this.Listcategories.indexOf(id) > -1){
      this.Listcategories.splice(this.Listcategories.indexOf(id), 1)
    }
    $('#' + id).addClass('in_select');
    for (let cat of this.Listcategories){
      $('#' + cat).removeClass('in_select');
    }
    this.Listcategories.push(id);
  }

  categoryEvery(){
    this.bread = 'catAll';
    this.Bread(this.bread);
    this.darInfo.pedirBusqCompleta(this.keyboard, this.filtro, this.country, this.busq_fecha);
    return this.category='';
  };

  categorySport(){
    this.darInfo.pedirCat(this.category);
    console.log('enviar');
    this.bread = 'catSport';
    this.Bread(this.bread);
  };

  categoryScience(){
    this.darInfo.pedirCat(this.category);
    this.bread = 'catScience';
    this.Bread(this.bread);
  };

  categoryEntert(){
    this.darInfo.pedirCat(this.category);
    this.bread = 'catMisc';
    this.Bread(this.bread);
  };

  countryEvery(){
    return this.country='';
  };

  countryEsp(){
    return this.country='es';
  };

  countryUK(){
    return this.country='en';
  };

  countryFR(){
    return this.country='fr';
  };

  countryDE(){
    return this.country='de';
  };

  obtenerfecha(){
    this.fecha_act = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    return this.fecha_act
  }

  obtenerfechaMenosUnMes(){
    if (this.date.getMonth() == 0){
      return (this.date.getFullYear() - 1) + '-' + (this.date.getMonth() + 12) + '-' + this.date.getDate();
    } else {
      return this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    }
  }

  obtenerfechaAyer(){
    if (this.date.getDate() == 1 && this.date.getMonth() == 0){
      return (this.date.getFullYear() - 1) + '-' + (this.date.getMonth() + 12) + '-' + (this.date.getDate() +30);
    } else if (this.date.getDate() == 1 && this.date.getMonth() != 0){
      return this.date.getFullYear() + '-' + (this.date.getMonth()) + '-' + (this.date.getDate() + 27);
    } else {
      return this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + (this.date.getDate() - 1);
    }
  }

  whenAlways(){
    return this.busq_fecha = '';
  }

  whenToday(){
    return this.busq_fecha = 'from=' + this.obtenerfechaAyer();
  }

  whenYesterday(){
    return this.busq_fecha = 'from=' + this.obtenerfechaAyer() + '&to=' + this.obtenerfecha();
  }

  whenMonth(){
    return this.busq_fecha = 'from=' + this.obtenerfechaMenosUnMes() + '&to=' + this.obtenerfecha();
  }

  preferencyLast(){
    return this.filtro='publishAt';
  }

  preferencyPopular(){
    return this.filtro='popularity';
  }

  preferencyRelev(){
    return this.filtro='relevancy';
  }

  devuelveColores(){
    this.cont++;
    if (this.cont == (this.coloresClar.length - 1)){
      this.cont = 0
    }
    return [this.coloresClar[this.cont], this.coloresOsc[this.cont]]
  }

  cambiaColores(claro = null, oscuro = null){
    claro = this.devuelveColores()[0];
    oscuro = this.devuelveColores()[1];
    $('#mainHeader').addClass(claro)
      .removeClass('blanco');
    $('#submenu').addClass(oscuro)
      .addClass('color')
      .removeClass('blanco');
    $('button').addClass(oscuro)
      .removeClass('gris');
  }

  Limpia(){
    for (let coloroscuro of this.coloresOsc){
      $('#submenu').removeClass(coloroscuro);
      $('button').removeClass(coloroscuro);
      }
    for (let colorclaro of this.coloresClar) {
      $('#mainHeader').removeClass(colorclaro);
      }
      this.normal();
    }

    normal(){
      $('#mainHeader').addClass('blanco');
      $('#submenu').addClass('blanco')
        .removeClass('color');
      $('button').addClass('gris');
    }

  ngOnInit() {

  }



}
