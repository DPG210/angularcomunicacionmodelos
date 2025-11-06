import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes-component',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
  public deportes:Array<string>
  public mensaje:string;

  //NECESITAMOS UN METODO QUE RECIBIRA EVENT QUE VA A SER CUALQUIER TIPADO (any)
  seleccionarFavoritoPadre(event:any):void{
    console.log("Comunicacion al padre " +event);
    this.mensaje="Mi deporte favorito es "+event; 
  }

  constructor(){
    this.mensaje="";
    this.deportes=["furbol","basketo","padel","jabalina","curling"]
  }
}
