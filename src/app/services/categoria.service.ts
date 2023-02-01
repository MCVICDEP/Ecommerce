import { Login } from './../interfaces/login';
import { request } from 'express';
import { ResponseApi } from './../interfaces/response-api';
import { environment } from './../../environments/environment';
import { Usuario } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlApi : string = environment.endpoint + "Categoria"
  constructor(private http : HttpClient) {}

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}/Lista`)
  }
}
