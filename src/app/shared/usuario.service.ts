import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "http://localhost:3000/";

  public usuario: Usuario;
  public logueado:boolean;

  constructor(private http: HttpClient) { 
 this.usuario = null;
 this.logueado=false;
  }

  public register (newUsuario:Usuario){
    return this.http.post(this.url+"registro", newUsuario)}

  public login (usuario:Usuario){
     return this.http.post(this.url+"login", usuario);
     //AQUI MANDAMOS EL OBJETO USUARIO A LA BASE DE DATOS, AUNQUE SOLO SE RELLENE EL CORREO
  }

  //SE MANDAN MEDIANTE LA URL. ESA ES LA CONEXION CON LA BASE DE DATOS



}




  

