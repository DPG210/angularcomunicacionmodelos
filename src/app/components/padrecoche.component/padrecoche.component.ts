import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padrecoche-component',
  standalone: false,
  templateUrl: './padrecoche.component.html',
  styleUrl: './padrecoche.component.css',
})
export class PadrecocheComponent {
  public cochesArray: Array<Coche>;
  constructor(){
    this.cochesArray=[
      new Coche("Ford","Mondeo", 300,30,false),
      new Coche("Peugote","cocodrilo", 240,15,false),
      new Coche("lambo","toguapo", 3000,350,false),
      new Coche("elcoche","demiabuela", 10,1,false),
    ]
  }
}
