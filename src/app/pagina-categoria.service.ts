import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll, take } from 'rxjs/operators';
import { AutoresService } from './autores.service';
import { AutenticacaoService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaginaCategoriaService {
  API_URL = 'http://localhost:8000/api/categoria/';

  constructor(private http: HttpClient, private autores: AutoresService, private auth: AutenticacaoService) {
  }


  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }

  public encontrar(id: number) {
    const options = this.getHeaders();
    const url = this.API_URL + id + '/';
    return this.http.get(url, options);
  }


}