import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario:Usuario;
  // public usuarios:Usuario[]

  constructor(public apiService: UsuarioService){  //private toast: ToastrService
  this.apiService.usuario;
  }


  registrarse(inputIdUsuario:HTMLInputElement,inputNombre:HTMLInputElement,inputApellidos:HTMLInputElement,inputCorreo:HTMLInputElement,inputFoto:HTMLInputElement): void{
let newUsuario: Usuario = new Usuario(inputIdUsuario.valueAsNumber, inputNombre.value, inputApellidos.value, inputCorreo.value, inputFoto.value)
this.apiService.register(newUsuario)
  }

}
