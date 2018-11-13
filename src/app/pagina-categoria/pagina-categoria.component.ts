import { Component, OnInit } from '@angular/core';
import { PaginaCategoriaService } from 'src/app/pagina-categoria.service';

@Component({
  selector: 'app-pagina-categoria',
  templateUrl: './pagina-categoria.component.html',
  styleUrls: ['./pagina-categoria.component.css']
})
export class PaginaCategoriaComponent implements OnInit {

  constructor(private categoria: PaginaCategoriaService) { }

  ngOnInit() {
  }

}
