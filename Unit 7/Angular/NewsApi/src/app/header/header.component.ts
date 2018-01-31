import { Component, OnInit } from '@angular/core';
import {DatosService} from "../datos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ListaNoticias: Array<any>[];

  keyboard = '';
  filtro = '';
  country = '';
  category = '';
  date = new Date();
  fecha_act = '';
  busq_fecha = '';

  constructor(private datos: DatosService) {
  }

  hacerRequest(){
    this.datos.LoadDataEvery(this.keyboard, this.filtro, this.country, this.busq_fecha).subscribe(data => {
      console.log(data);
     //this.ListaNoticias.push(data);
    })
  }

  pasarArrayReq(){
    return this.ListaNoticias;
  }

  categoryEvery(){
    return this.category='';
  };

  categorySport(){
    this.datos.LoadSourceData('sport').subscribe(data=>
      console.log(data)
  )
  };

  categoryScience(){
    this.datos.LoadSourceData('science').subscribe(data=>
      console.log(data)
  )
  };

  categoryEntert(){
    this.datos.LoadSourceData('entertainment').subscribe(data=>
      console.log(data)
  )
  };

  countryEvery(){
    return this.country='';
  };

  countryEsp(){
    return this.country='es';
  };

  countryUK(){
    return this.country='gb';
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

  ngOnInit() {

  }



}
