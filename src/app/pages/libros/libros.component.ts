import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/shared/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  public libros: Libro[];

  constructor(public apiService: LibroService) {

    this.apiService.libros;

  }


  public add(inputId_libro: HTMLInputElement, inputId_usuario: HTMLInputElement, inputTitulo: HTMLInputElement, inputAutor: HTMLInputElement, inputPrecio: HTMLInputElement, inputPhoto: HTMLInputElement) {
    let newLibro: Libro = new Libro(
      inputId_libro.valueAsNumber,
      inputId_usuario.valueAsNumber,
      inputTitulo.value,
      inputAutor.value,
      inputPrecio.valueAsNumber,
      inputPhoto.value
    )
    this.apiService.add(newLibro).subscribe
    ((data)=>
    {
      console.log(data);
    })
  }

  public getOne(inputIds_user: HTMLInputElement,inputIds_libro: HTMLInputElement ){
// let libro : Libro = new Libro (inputIds_libro.valueAsNumber,inputIds_user.valueAsNumber,"","",0,"")
this.apiService.getOne(inputIds_user.valueAsNumber,inputIds_libro.valueAsNumber).subscribe((data:Libro)=>
{ 
  console.log(data); 
  this.apiService.libros=data[0] //acceder a un elemento del array
}
)}

  public getAll(inputIds_user: HTMLInputElement) {
    // this.libros = [this.ServicioService.getOne(inputIds_libro.valueAsNumber)];
    let libro : Libro = new Libro (0,inputIds_user.valueAsNumber,"","",0,"")
    this.apiService.getAll(inputIds_user.valueAsNumber).subscribe((data:Libro [])=>
    { 
      console.log(data); 
      // this.libros=data[0]
      this.apiService.libros=data
    }
    )
  }

  public delete(inputIds_libro:HTMLInputElement){
    // this.ServicioService.delete(inputId_libro.valueAsNumber)
    // let libro : Libro = new Libro (inputIds_libro.valueAsNumber,0,"","",0,"")
    this.apiService.delete(inputIds_libro.valueAsNumber).subscribe((data:Libro)=>
    { 
      console.log(data); 
       this.apiService.libros=data[0]
    }
    )
  }

  ngOnInit(): void { }
}
