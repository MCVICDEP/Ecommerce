import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../interfaces/response-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  apiBase: string = 'http://localhost:10150/api/UsuarioControlador'
  constructor(private http: HttpClient) { 
  }
  getIniciarSesion(correo: string, password: string): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.apiBase}?correo=${correo}&password=${password}`)
  }
}
