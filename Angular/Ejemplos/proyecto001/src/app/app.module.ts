import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponentComponent } from './dado-component/dado-component.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponentComponent,
    ComponenteEnLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
