import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'htpps://api.carrito.com' : 'http://localhost:9000'
export const productUrl = baseUrl + '/productos'
export const carritoUrl = 'http://localhost:3000/carrito'