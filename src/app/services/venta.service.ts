import { Producto } from './../interfaces/producto';
import { Login } from './../interfaces/login';
import { request } from 'express';
import { ResponseApi } from './../interfaces/response-api';
import { environment } from './../../environments/environment';
import { Usuario } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlApi : string = environment.endpoint + "Venta"
  constructor(private http:HttpClient) {}

  registrar(request:Venta):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}/Registrar`,request)
  }

  historial(buscarPor:string, numeroVenta:string, fechaInicio:string, fechaFin:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}/Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }

  reporte(fechaInicio:string, fechaFin:string):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}/Reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`)
  }
}
