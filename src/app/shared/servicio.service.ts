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


}