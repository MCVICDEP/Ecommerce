import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { productUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:9000/productos'


  constructor(private http:HttpClient) { }

  getProducts(){

    let header=new HttpHeaders()
    .set('Type-content', 'application/json')

    return  this.http.get(this.url,{
      headers:header
    });
  }
}
