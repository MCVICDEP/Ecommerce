import { Producto } from './producto';
export class CarroItem {
    idproducto: number;
    nombreProducto: string;
    qty: number;
    precio: string;

    constructor(idproducto: number, product: Producto, qty = 1) {
        this.idproducto = product.idproducto;
        this.nombreProducto = product.nombreProducto;
        this.precio = product.precio;
        this.qty = qty;
    }
}
