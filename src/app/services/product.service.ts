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
export class ProductService {

  private urlApi : string = environment.endpoint + "Producto"
  constructor(private http:HttpClient) {}

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}/Lista`)
  }
  guardar(request:Producto):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}/Guardar`,request)
  }

  editar(request:Producto):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}/Editar`,request)
  }
  eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}/Eliminar/${id}`)
  }


    // let header=new HttpHeaders()
    // .set('Content-Type', 'application/json')

    // return  this.http.get(this.url,{
    //   headers:header
  }
  
