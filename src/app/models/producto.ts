export class Producto {
    idproducto: number;
    cod_producto: string;
    nom_producto: string;
    desc_producto: string;
    precio_producto: number;
    cant_producto: number;
    img_producto: string;
    flag:number;

    constructor(idproducto=0, cod_producto="",
    nom_producto="", desc_producto="", precio_producto=0,
    cant_producto=0, img_producto="", flag=0) {
        this.idproducto = idproducto;
        this.cod_producto= cod_producto;
        this.nom_producto=nom_producto;
        this.desc_producto=desc_producto;
        this.precio_producto=precio_producto;
        this.cant_producto=cant_producto;
        this.img_producto=img_producto;
        this.flag=flag
    }
}
