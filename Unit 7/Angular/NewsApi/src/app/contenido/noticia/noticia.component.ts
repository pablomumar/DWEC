import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DatosService } from "../../datos.service";
import {NoticiaServService} from "../../noticia-serv.service";
import {Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: NoticiaComponent;
  private noticiaSubscription: Subscription;
  id: any = null;
  name_source: string;
  source: Array<any>[] = [this.id, this.name_source];
  author: string;
  title: string;
  description: string;
  url_new: string;
  url_image: string;
  publishedAt: string;

  constructor(private noticiaSer: NoticiaServService) { }


  ngOnInit() {
    this.noticiaSubscription = this.noticiaSer.$visible.subscribe((noticia: NoticiaComponent) => {
      //this.noticia.isVisible = noticia.title === this.noticia.title;
    })
  }

  ngOnDestroy() {
    if (this.noticiaSubscription) {
      this.noticiaSubscription.unsubscribe();
    }
  }

  toggle() {
    this.noticiaSer.$visible.next(this.noticia);
  }
}