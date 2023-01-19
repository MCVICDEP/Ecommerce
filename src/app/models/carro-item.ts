import { Producto } from './producto';
export class CarroItem {
    id: number;
    idproducto: number;
    nom_producto: string;
    qty: number;
    precio_producto: number;

    constructor(id: number, product: Producto, qty = 1) {
        this.id = id;
        this.idproducto = product.idproducto;
        this.nom_producto = product.nom_producto;
        this.precio_producto = product.precio_producto;
        this.qty = qty;
    }
}
