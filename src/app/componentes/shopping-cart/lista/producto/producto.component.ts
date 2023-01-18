import { Producto } from './../../../../models/producto';
import { Component, Input, OnInit } from '@angular/core';
import {MensajeService} from './../../../../services/mensaje.service'
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  productoItem!: Producto;
  constructor(private msg:MensajeService, private cart:CarroService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    console.log(this.productoItem)
    this.cart.addProductToCart(this.productoItem).subscribe(() =>{
      this.msg.sendMsg(this.productoItem)
    })
  }
}
