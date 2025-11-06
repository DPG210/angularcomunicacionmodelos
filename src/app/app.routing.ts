import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaProductosComponent } from "./components/lista.productos.component/lista.productos.component";
import { PadrecocheComponent } from "./components/padrecoche.component/padrecoche.component";

const appRoutes: Routes =[
    {path:"listaproductos", component:ListaProductosComponent},
    {path:"coches", component:PadrecocheComponent}
]

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);