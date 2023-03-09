import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
//hemos instalado esto en el dia5
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = "http://localhost:3000/";

  public libros: Libro[];


  constructor(private http: HttpClient) {
  
  }

  // public register (usuario:Usuario){
  //   this.http.post(this.url+"registro");
  // }

  // public login (usuario:Usuario){
  //   return this.http.post(this.url+"login");
  // }

  // getLibro(id: number) {
  //   return this.http.get(this.url + "/" + id)
  // }

  // getLibros(){
  //   return this.http.get(this.url)
  // }

  // postLibros(newLibro: Libro) {
  //   return this.http.post(this.url, newLibro)
  // }

  //AQUI SE "CREAN LAS FUNCIONES"

  // public getAll(): Libro[] {
  //   return this.libros
  // }


  // public getOne(id_libro: number): Libro {

  //   for (let i = 0; i < this.libros.length; i++) {
  //     if (this.libros[i].id_libro === id_libro) {
  //       return this.libros[i]
  //     }

  //   }
  // }

  // public add(libro: Libro): void {
  //   this.libros.push(libro)
  // }

  // public delete(id_libro: number): boolean {
  //   for (let i = 0; i < this.libros.length; i++) {
  //     if (this.libros[i].id_libro == id_libro ) {
  //       this.libros.splice(i, 1)
  //       return true
  //     }
  //   }
  // }
}