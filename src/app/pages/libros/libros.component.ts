import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  public libros: Libro[];

  constructor(public ServicioService: ServicioService) {

    //estoy igualando la nueva variable libros al libros que hay en servicioService que ya contiene el array de Libros
    // this.libros=this.ServicioService.libros
    this.libros = this.ServicioService.getAll()

  }

  //AQUI SE "LLAMAN" LAS FUNCIONES CREADAS EN EL SERVICE

  public add(inputId_libro: HTMLInputElement, inputId_usuario: HTMLInputElement, inputTitulo: HTMLInputElement, inputAutor: HTMLInputElement, inputPrecio: HTMLInputElement, inputPhoto: HTMLInputElement) {
    this.ServicioService.add(new Libro(
      inputId_libro.valueAsNumber,
      inputId_usuario.valueAsNumber,
      inputTitulo.value,
      inputAutor.value,
      inputPrecio.valueAsNumber,
      inputPhoto.value
    ))
    console.log(this.ServicioService.getAll)
  }

  public getOne(inputIds_libro: HTMLInputElement): void {
    this.libros = [this.ServicioService.getOne(inputIds_libro.valueAsNumber)];

  }

  public delete(inputId_libro:HTMLInputElement):void{
   this.ServicioService.delete(inputId_libro.valueAsNumber)
  
  }

  ngOnInit(): void { }
}
