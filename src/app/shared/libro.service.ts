import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
//hemos instalado esto en el dia5
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url = "http://localhost:3000/libros";

  public libros: Libro[];

  constructor(private http: HttpClient) { 
    this.libros=[];
    // this.libros=null;

   }
 getAll(userId: number) :Observable <Libro> {
    return this.http.get<Libro>(this.url + userId)
  }

  getOne(userId:number, id_libro:number):Observable <Libro>{
    return this.http.get<Libro>(this.url +id_libro+"&"+userId)
    // libros?id_libro=2&id_usuario=21
  }

  add(libro:Libro):Observable <Libro>{
    return this.http.post<Libro>(this.url+"libro", libro);

  }

  delete(id_libro:number):Observable <{}>{
    return this.http.delete(this.url + id_libro)
  }



//    - getAll(userId:number):Observable<Object>. Devuelve la llamada al endpoint GET “/libros”.
// - getOne(userId:number, id_libro:number):Observable<Object>.
// Devuelve la llamada al endpoint GET “/libros?id”.
// - add(libro:Libro):Observable<Object>. Devuelve la llamada al endpoint POST “/libros”.
// - delete(id_libro:number):Observable<Object>. Devuelve la llamada al endpoint DELETE ”/libros”.

     // public register (usuario:Usuario){
  //   this.http.post(this.url+"registro");
  // }

  // public login (usuario:Usuario){
  //   return this.http.post(this.url+"login");
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
