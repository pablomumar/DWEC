import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicioService } from './servicio.service';
import { SomethingComponent } from './something/something.component';


@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
