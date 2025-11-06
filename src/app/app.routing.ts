import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaProductosComponent } from "./components/lista.productos.component/lista.productos.component";
import { PadrecocheComponent } from "./components/padrecoche.component/padrecoche.component";
import { PadredeportesComponent } from "./components/padredeportes.component/padredeportes.component";
import { LibreriaComponent } from "./components/libreria-component/libreria-component";

const appRoutes: Routes =[
    {path:"listaproductos", component:ListaProductosComponent},
    {path:"coches", component:PadrecocheComponent},
    {path:"padre", component:PadredeportesComponent},
    {path:"comics", component:LibreriaComponent}
]

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);