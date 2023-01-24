export class Producto {
    idProducto: number;
    cod_Producto: string;
    nom_Producto: string;
    desc_Producto: string;
    precio_Producto: number;
    cant_Producto: number;
    img_Producto: string;
    flag:number;

    constructor(idProducto=0, cod_Producto="",
    nom_Producto="", desc_Producto="", precio_Producto=0,
    cant_Producto=0, img_Producto="", flag=0) {
        this.idProducto = idProducto;
        this.cod_Producto= cod_Producto;
        this.nom_Producto=nom_Producto;
        this.desc_Producto=desc_Producto;
        this.precio_Producto=precio_Producto;
        this.cant_Producto=cant_Producto;
        this.img_Producto=img_Producto;
        this.flag=flag
    }
}
