export class Producto{
    //LAS PROPIEDADES PARA QUE SEAN ACCESIBLES DEBEN SER PUBLICAS
    // public nombre: string;
    // public imagen: string;
    // public precio: number;

    // //VAMOS A CREAR UN CONSTRUCTOR CON PARAMETROS PARA QUE RECIBA
    // //LA INFORMACION DE LAS PROPIEDADES DIRECTAMENTE
    // constructor(name:string, image:string, price:number){
    //     this.nombre=name;
    //     this.imagen=image;
    //     this.precio=price;
    // }
    constructor(
        public nombre: string,
        public imagen: string,
        public precio: number
    ){}
}