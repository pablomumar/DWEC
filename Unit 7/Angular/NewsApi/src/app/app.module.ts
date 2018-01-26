import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NoticiaComponent } from './contenido/noticia/noticia.component';
import { DatosService } from './datos.service';
import { HttpClientModule} from "@angular/common/http";
import { DataInputService } from './data-input.service';
import { FormsModule } from "@angular/forms";
import { NoticiaServService } from './noticia-serv.service';
import { ListaNoticiasComponent } from './contenido/lista-noticias/lista-noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    NoticiaComponent,
    ListaNoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatosService, DataInputService, NoticiaServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
