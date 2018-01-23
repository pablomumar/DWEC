import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DatosService } from './datos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
