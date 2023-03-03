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

    this.libros=[]
    this.libros=[
      new Libro(1,2,"Casita azul", "Carlos", 25, "https://imagenes.elpais.com/resizer/sMWeM3Z0awXbSkNaTMExLR_QNLU=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/YC5XJK5X2DES4MGR2W3HWWS7JU.jpg"),
      new Libro(2,4,"Mis memorias", "Inma", 28, "photo_mismemorias")
    ]
  }
  public add(inputId_libro:HTMLInputElement, inputId_usuario:HTMLInputElement,inputTitulo:HTMLInputElement,inputAutor:HTMLInputElement,inputPrecio:HTMLInputElement, inputPhoto:HTMLInputElement){
    this.libros.push(new Libro(
    inputId_libro.valueAsNumber,
    inputId_usuario.valueAsNumber,
    inputTitulo.value,
    inputAutor.value,
    inputPrecio.valueAsNumber,
    inputPhoto.value
    ))
  }
  ngOnInit(): void {}
  
}
