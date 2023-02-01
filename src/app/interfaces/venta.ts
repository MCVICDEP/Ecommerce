import { Detalleventa } from './detalleventa';
export interface Venta {
    idventa : number
    numerodoc :string
    formapago : string
    montoTotal : string
    fechaRegistro : string
    detalleVenta : Detalleventa[]
}
