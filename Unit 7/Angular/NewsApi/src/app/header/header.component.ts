import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatosService} from "../datos.service";
import {} from '@types/jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pasaRequest = new EventEmitter();

  public ListaNoticias: Array<any>[];

  keyboard = '';
  filtro = '';
  country = '';
  category = '';
  date = new Date();
  fecha_act = '';
  busq_fecha = '';
  bread='';
  Listcategories = ['catAll', 'catSport', 'catScience', 'catMisc'];


  constructor(private datos: DatosService) {
  }

  lanzar(event){
    this.pasaRequest.emit({request: this.hacerRequest()});
    console.log('emitido');
  }

  hacerRequest(){
    this.categoryEvery();
    this.datos.LoadDataEvery(this.keyboard, this.filtro, this.country, this.busq_fecha).subscribe(data => {
      console.log(data);
      return data;
    });
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
    return this.category='';
  };

  categorySport(){
    this.datos.LoadSourceData('sport').subscribe(data=>
      console.log(data)
  );
    this.bread = 'catSport';
    this.Bread(this.bread);
  };

  categoryScience(){
    this.datos.LoadSourceData('science').subscribe(data=>
      console.log(data)
  );
    this.bread = 'catScience';
    this.Bread(this.bread);
  };

  categoryEntert(){
    this.datos.LoadSourceData('entertainment').subscribe(data=>
      console.log(data)
  );
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
