import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';

import { App } from './app';
import { ListaProductosComponent } from './components/lista.productos.component/lista.productos.component';
import { MenuProductosComponent } from './components/menu.productos.component/menu.productos.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecocheComponent } from './components/padrecoche.component/padrecoche.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeportesComponent } from './components/hijodeportes.component/hijodeportes.component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    MenuProductosComponent,
    HijococheComponent,
    PadrecocheComponent,
    PadredeportesComponent,
    HijodeportesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
