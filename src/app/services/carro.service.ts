import { carritoUrl } from './../config/api';
import { CarroItem } from 'src/app/models/carro-item';
import { Producto } from './../models/producto';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private urlApi = carritoUrl

  constructor(private http: HttpClient) { }

  getCarroItems(): Observable<CarroItem[]> {
    return this.http.get<CarroItem[]>(carritoUrl).pipe(
      map((result: any[]) => {
        let carroItem: CarroItem[] = [];
        for (let item of result) {
          let productoExistente = false;

          for (let i in carroItem) {
            if (carroItem[i].idProducto === item.product.idProducto) {
              carroItem[i].qty++
              productoExistente = true
              break;
            }
          }

          if (!productoExistente) {
            carroItem.push(new CarroItem(item.idProducto, item.product))
          }
        }
        console.log(carroItem)
        return carroItem;
      })
    );
  }

  addProductToCart(product: Producto): Observable<any> {
    return this.http.post(carritoUrl, { product });
  }

  // removeProduct(idp:number):Observable<{}>{
  //   this.urlApi = `${this.urlApi}/${idp}`;
  //   return this.http.delete(this.urlApi);    
  // }
  
  removeall(idProducto:number){
    
    return this.http.delete(carritoUrl+"/"+idProducto)    
  }

  removeProduct(idProducto:string){
    this.http.delete(carritoUrl+"/"+idProducto).subscribe();
  }
}
