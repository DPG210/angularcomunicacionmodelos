import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeportes-component',
  standalone: false,
  templateUrl: './hijodeportes.component.html',
  styleUrl: './hijodeportes.component.css',
})
export class HijodeportesComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any>= new EventEmitter();

  //NECESITAMOS UN METODO PARA QUE CADA HIJO REALICE CLICK Y, A SU VEZ,
  //LLAMAMOS AL PARENT
  seleccionarFavoritoHijo():void{
    //DENTRO DE emit() ENVIAREMOS LOS PARAMETROS QUE NECESITEMOS
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
