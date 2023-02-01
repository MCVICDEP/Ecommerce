import { Observable } from 'rxjs';
import { Producto } from './../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productList:Producto[]=[]

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.lista().subscribe((resp:any)=>{
      console.log(resp)
      this.productList=resp
    });
  }

}
