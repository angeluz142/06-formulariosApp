import { Component } from '@angular/core';


interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  nuevoJuego:string = '';

  persona:Persona = {
    nombre:"Angel Uzcategui",
    favoritos:[
      {
        id:1,
        nombre:"Juego 1"
      },
      {
        id:2,
        nombre:"Juego 2"
      }
    ]
  }

  guardar(){

  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }

  agregar(){
    const _nuevo:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({..._nuevo});
    this.nuevoJuego = '';
  }

}
