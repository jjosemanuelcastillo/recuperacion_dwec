import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'busqueda', component: BusquedaComponent
  },
  {
    path:'lista',component:ListaProductosComponent
  },
  {
    path: 'error', component: Error404Component
  },
  {
    path:'**', redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
