import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  public miUsuario: Usuario
  constructor()
  {
    this.miUsuario = new Usuario (1, "Lorena", "Lopez", "lorena@lopez.com", "www.lorenalopez.es")
  }


public modificar(inputId:HTMLInputElement, inputNombre:HTMLInputElement,inputApellidos:HTMLInputElement,inputCorreo:HTMLInputElement,inputUrl:HTMLInputElement ){
    
    this.miUsuario.id_usuario=inputId.valueAsNumber;
    this.miUsuario.nombre=inputNombre.value;
    this.miUsuario.apellidos=inputApellidos.value;
    this.miUsuario.correo=inputCorreo.value;
    this.miUsuario.url=inputUrl.value;
   
}

  ngOnInit():void{}

}
