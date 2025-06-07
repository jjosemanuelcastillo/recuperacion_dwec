import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { FiltroProductosPipe } from './pipes/filtro-productos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ListaProductosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
