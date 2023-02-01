import { AdminComponent } from './componentes/admin/admin.component';
import { DetallesComponent } from './componentes/shopping-cart/lista/producto/detalles/detalles.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './componentes/log/log.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NotFoundComponent } from './componentes/shared/not-found/not-found.component';
import { ProductosadmComponent } from './componentes/productosadm/productosadm.component';
import { ModalusuarioComponent } from './componentes/layout/modals/modalusuario/modalusuario.component';

const routes: Routes = [
  {path: '', redirectTo:'/compra', pathMatch:'full'},
  {path:'login', component: LogComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'compra', component: ShoppingCartComponent},
  {path: 'detalle', component: DetallesComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'modalusuario', component: ModalusuarioComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
