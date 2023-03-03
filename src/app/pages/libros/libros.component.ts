import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit{
  public libros: Libro[];
  constructor()
  {

    // this.libros=[]
    this.libros=[
      new Libro(1,2,"Casita azul", "Carlos", 25, "photo_casitaazul"),
      new Libro(2,4,"Mis memorias", "Inma", 28, "photo_mismemorias")
    ]
  }
  public add(inputId_libro:HTMLInputElement, inputId_usuario:HTMLInputElement,inputTitulo:HTMLInputElement,inputAutor:HTMLInputElement,inputPrecio:HTMLInputElement, inputPhoto:HTMLInputElement){
    
    this.libros[0].id_libro=inputId_libro.valueAsNumber;
    this.libros[0].id_usuario=inputId_usuario.valueAsNumber;
    this.libros[0].titulo=inputTitulo.value;
    this.libros[0].autor=inputAutor.value;
    this.libros[0].precio=inputPrecio.valueAsNumber;
    this.libros[0].photo=inputPhoto.value;
   
  }
  ngOnInit(): void {}
  
}
