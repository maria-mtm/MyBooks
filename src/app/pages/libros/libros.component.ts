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
  ngOnInit(): void {}
  
}
