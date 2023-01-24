import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { FiltroComponent } from './componentes/shopping-cart/filtro/filtro.component';
import { ListaComponent } from './componentes/shopping-cart/lista/lista.component';
import { CarritoComponent } from './componentes/shopping-cart/carrito/carrito.component';
import { ItemComponent } from './componentes/shopping-cart/carrito/item/item.component';
import { ProductoComponent } from './componentes/shopping-cart/lista/producto/producto.component';
import { LogComponent } from './componentes/log/log.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NotFoundComponent } from './componentes/shared/not-found/not-found.component';
import { DetallesComponent } from './componentes/shopping-cart/lista/producto/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltroComponent,
    ListaComponent,
    CarritoComponent,
    ItemComponent,
    ProductoComponent,
    LogComponent,
    RegistroComponent,
    NotFoundComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
