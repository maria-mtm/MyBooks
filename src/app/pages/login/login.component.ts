import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario;
  // public usuarios:Usuario[]

  constructor(public apiService: UsuarioService, private router:Router) { 
    this.apiService.usuario;
  }


  iniciarSesion(inputCorreo: HTMLInputElement): void {
    let usuario: Usuario = new Usuario(0,"","",inputCorreo.value,"")
//AQUI RECOGEMOS LOS DATOS DEL FRONT PARA MANDARLOS AL SERVICE
    this.apiService.login(usuario).subscribe((data:Usuario[])=>
    { //data recoge todos los datos que le metemos del front
      
      console.log(data); //AQUI HEMOS RECOGIDO LOS DATOS DEL CORREO
      if (data.length == 1){ //comprobacion de que el array tiene 1 componente, por lo cual existe usuario. Esta comporbacion realmente no es necesaria, porque
      this.apiService.logueado=true; //se cambia logueado a true
      this.apiService.usuario=data[0]; //se cambia usuario al usuario que ha logueado
      }
      //para ir a la pagina de libros una vez se ha logueado:
      this.router.navigate(['/libros']);
    }
    )}
}
