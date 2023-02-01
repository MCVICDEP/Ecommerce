import { Producto } from './../interfaces/producto';
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
export class DashboardService {
  private urlApi: string = environment.endpoint + "Dashboard"
  constructor(private http: HttpClient) {}

  resumen():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}/Resumen`)
  }
}
