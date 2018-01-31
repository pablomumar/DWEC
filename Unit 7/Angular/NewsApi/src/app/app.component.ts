import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor () {
  }

  cambiaFondo(){

  }

  cambiaColores($event):void{
    console.log('dfsdf');
    $('#mainHeader').addClass('blue');
    $('button').addClass('blueClaro');
  }


}
