import { Observable } from 'rxjs';
import { Producto } from './../../../models/producto';
import { Component, OnInit, Pipe, ɵisSubscribable } from '@angular/core';
import { MensajeService } from 'src/app/services/mensaje.service';
import { IfStmt } from '@angular/compiler';
import { CarroService } from 'src/app/services/carro.service';
import { CarroItem } from 'src/app/models/carro-item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoItems: any[] = []

  carritoTotal = 0

  constructor(private msg: MensajeService, private cart:CarroService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.cargarItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Producto) => {
      this.cargarItems();
    })
  }

  cargarItems(){
    this.cart.getCarroItems().subscribe((items: CarroItem[]) => {
      this.carritoItems=items;
      this.calcTotalCarro();
    })
  } 
    calcTotalCarro(){      
      this.carritoTotal = 0
      this.carritoItems.forEach(
        item => {
          this.carritoTotal += (item.qty * item.price)
        })
    }
  }