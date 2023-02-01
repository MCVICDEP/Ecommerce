export class Producto {
    idproducto: number;
    nombreProducto: string;
    descProducto: string;
    precio: string;
    imgProducto: string;
    idcategoria: number;
    descripcionCategoria: string;
    stock:number;
    flag:number;

    constructor(idproducto=0, nombreProducto="",
    descProducto="", precio="", imgProducto="",
    idcategoria=0, descripcionCategoria="", stock=0, flag=0) {
        this.idproducto = idproducto;
        this.nombreProducto= nombreProducto;
        this.descProducto=descProducto;
        this.precio=precio;
        this.imgProducto=imgProducto;
        this.idcategoria=idcategoria;
        this.descripcionCategoria=descripcionCategoria;
        this.stock=stock
        this.flag=flag
    }
}
