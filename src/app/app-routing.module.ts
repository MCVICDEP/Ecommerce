import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './componentes/log/log.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NotFoundComponent } from './componentes/shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/compra', pathMatch:'full'},
  {path:'login', component: LogComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'compra', component: ShoppingCartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
