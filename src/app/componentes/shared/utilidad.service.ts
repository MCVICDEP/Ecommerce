import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  constructor() {}

  guardarSesionUsuario(usuarioSession : Sesion){
    localStorage.setItem("usuario", JSON.stringify(usuarioSession));
  }

  obtenerSesionUsuario(){
    const dataCadena = localStorage.getItem("usuario");

    const usuario = JSON.parse(dataCadena!);
    return usuario;
  }

  eliminarSesionUsuario(){
    localStorage.removeItem("usuario")
  }
}
