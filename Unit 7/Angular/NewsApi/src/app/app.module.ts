import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DatosService } from './datos.service';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NoticiaServService } from './noticia-serv.service';
import { ListaNoticiasComponent } from './contenido/lista-noticias/lista-noticias.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaSourcesComponent } from './contenido/lista-sources/lista-sources.component';


const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Science', component: ListaSourcesComponent},
  {path: 'Sport', component: ListaSourcesComponent},
  {path: 'Misc', component: ListaSourcesComponent},
  {path: 'Busq', component: ListaNoticiasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    ListaNoticiasComponent,
    FooterComponent,
    InicioComponent,
    ListaSourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [DatosService, NoticiaServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
