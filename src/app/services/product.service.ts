import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { productUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='https://localhost:44341/api/ProductoControlador'


  constructor(private http:HttpClient) { }

  getProducts(){

    let header=new HttpHeaders()
    .set('Content-Type', 'application/json')

    return  this.http.get(this.url,{
      headers:header
    });
  }
}
