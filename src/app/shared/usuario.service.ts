import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:3000/registro";

  public usuario: Usuario[];
  public logueado:boolean;

  constructor(private http: HttpClient) { 
 this.usuario=[];
 this.logueado;
  }

  public register (newUsuario:Usuario){
    return this.http.post(this.url, newUsuario)}
}


    // postLibros(newLibro: Libro) {
  //   return this.http.post(this.url, newLibro)
  // }

  
  // public login (usuario:Usuario){
  //   return this.http.post(this.url+"login");
  // }
