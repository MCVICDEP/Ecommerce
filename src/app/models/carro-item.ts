import { Producto } from './producto';
export class CarroItem {
    idProducto: number;
    nom_Producto: string;
    qty: number;
    precio_Producto: number;

    constructor(idProducto: number, product: Producto, qty = 1) {
        this.idProducto = product.idProducto;
        this.nom_Producto = product.nom_Producto;
        this.precio_Producto = product.precio_Producto;
        this.qty = qty;
    }
}
