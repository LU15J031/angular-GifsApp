import { Component, Injectable} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  buscar(termino: string) {
 this.gifsService.buscarGifs(termino);
}


constructor( private gifsService: GifsService){}

get historiaBusqueda(){
  return this.gifsService.historial;
}

}
