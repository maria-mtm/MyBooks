import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public libros: Libro[];


  constructor() {
    this.libros = [
        new Libro(1,2,"Casita azul", "Carlos", 25, "https://imagenes.elpais.com/resizer/sMWeM3Z0awXbSkNaTMExLR_QNLU=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/YC5XJK5X2DES4MGR2W3HWWS7JU.jpg"),
        new Libro(2,4,"Mis memorias", "Inma", 28, "https://thumbs.dreamstime.com/b/abra-el-libro-libros-del-libro-encuadernado-en-la-tabla-de-madera-fondo-de-la-educaci%C3%B3n-de-nuevo-escuela-copie-el-espacio-para-76106466.jpg")
      ]
  
  }

  public getAll(): Libro[] {
    return this.libros
  }
  public getOne(id_libro: number): Libro {

    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id_libro == id_libro) {
        return this.libros[i]
      }
      // else{
      //   return this.getAll
      // }
    }
  }
}

// add(libro: Libro): void{}

// delete(id_libro: number): boolean{}
//slice


