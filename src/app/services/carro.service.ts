import { CarroItem } from './../models/carro-item';
import { Producto } from './../models/producto';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { carritoUrl } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  getCarroItems(): Observable<CarroItem[]> {
    return this.http.get<CarroItem[]>(carritoUrl).pipe(
      map ((result:any []) => {
        let carroItem: CarroItem[]=[];
        for(let item of result){
          let productoExistente=false;

        for(let i in carroItem){
          if (carroItem[i].productId===item.product.id){
            carroItem[i].qty++
            productoExistente=true
            break;
          }
        }

        if (!productoExistente){
            carroItem.push(new CarroItem(item.id, item.product))
        }
      }
        return carroItem;
      })
    );
  }

  addProductToCart(product:Producto):Observable<any>{
    return this.http.post(carritoUrl,{product});
  }
}
