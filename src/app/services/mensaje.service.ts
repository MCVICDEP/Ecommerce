import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  subject = new Subject<Producto>()

  constructor() { }

  sendMsg(product:Producto) {
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable();
  }
}