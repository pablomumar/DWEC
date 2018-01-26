import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { NoticiaComponent } from './contenido/noticia/noticia.component';
import { DatosService } from './datos.service';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NoticiaServService } from './noticia-serv.service';
import { ListaNoticiasComponent } from './contenido/lista-noticias/lista-noticias.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    NoticiaComponent,
    ListaNoticiasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatosService, NoticiaServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
